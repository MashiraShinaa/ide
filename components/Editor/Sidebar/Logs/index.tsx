import { useState } from 'react'
// import hljs from 'highlight.js'
import { deployments } from '@prisma/client'

import Text from 'components/Text'
import { useTabs } from 'components/Tabs/useTabs'
import Tabs from 'components/Tabs'
import { Log, LogType, ToolName } from 'db/types'

import LogStream from './LogStream'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database, Json } from 'db/supabase'
import { deploymentsTable } from 'db/tables'
import produce from 'immer'

const tabsProps = {
  tabs: [
    {
      label: 'Pretty',
      id: 'pretty',
    },
    {
      label: 'Raw',
      id: 'raw',
    },
  ]
}

export interface Props {
  deployment?: deployments
  isDeployRequestRunning?: boolean
}

function Logs({
  deployment,
  isDeployRequestRunning,
}: Props) {
  const [selectedTab, setSelectedTab] = useState(0)
  const client = useSupabaseClient<Database>()
  const tabsCss = useTabs(tabsProps)

  // useEffect(function highlightCode() {
  //   if (selectedTab === 1) {
  //     hljs.highlightAll()
  //   }
  // }, [logs, selectedTab])

  async function saveAnswer({
    logID,
    answer,
    toolName,
  }: { logID: string, answer: string, toolName: ToolName }) {
    if (!deployment) return

    const logs = produce(deployment.logs as unknown as Log[], ls => {
      const log = ls.find(l => l.id === logID)
      if (log && log.type === LogType.Tool && log.tool_name === toolName) {
        log.tool_output = answer
      }
    })

    await client.from(deploymentsTable).update({ logs: logs as unknown as Json[] }).eq('id', deployment.id).single()
  }

  return (
    <div className="
      max-w-full
      flex
      flex-col
      overflow-hidden
    ">
      <div className="
        flex
        items-center
        justify-between
        border-b
        py-2
        pr-4
      ">
        <Text
          text="Agent"
          size={Text.size.S2}
          className="
            uppercase
            text-slate-400
            font-semibold
            px-4
          "
        />

        {process.env.NODE_ENV === 'development' && (
          <Tabs
            {...tabsCss.tabProps}
            selectedTabIndex={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}
      </div>
      {selectedTab === 0 &&
        <LogStream
          logs={deployment?.logs as Log[] | undefined}
          onAnswer={saveAnswer}
          isDeployRequestRunning={isDeployRequestRunning}
        />
      }
      {selectedTab === 1 &&
        <LogStream
          rawLogs={deployment?.logs_raw}
          isDeployRequestRunning={isDeployRequestRunning}
        />
      }
    </div>
  )
}

export default Logs
