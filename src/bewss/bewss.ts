import { bewssOptions } from './@interface/bewss.i'
import commandManager from "./command/commandManager"
import consoleManager from "./console/consoleManager"
import eventManager from "./events/eventManager"
import Logger from "./logger/logger"
import pluginManager from "./plugin/pluginManager"
import serverManager from "./server/serverManager"
import playerManager from "./player/playerManager"
import agentManager from "./agent/agentManager"
import scoreboardManager from './scoreboard/scoreboardManager'

class bewss {
  private logger: Logger

  private serverManager: serverManager
  private consoleManager: consoleManager
  private commandManager: commandManager
  private pluginManager: pluginManager
  private playerManager: playerManager
  private agentManager: agentManager
  private scoreboardManager: scoreboardManager
  private eventManager: eventManager
  private port = 8080

  constructor(options?: bewssOptions) {
    if (options) {
      this.port = options.port
        ? options.port
        : 8080
    }
    this.logger = new Logger()
    this.serverManager = new serverManager(this, this.port)
    this.consoleManager = new consoleManager(this)
    this.commandManager = new commandManager(this)
    this.pluginManager = new pluginManager(this)
    this.playerManager = new playerManager(this)
    this.agentManager = new agentManager(this)
    this.scoreboardManager = new scoreboardManager(this)
    this.eventManager = new eventManager(this)
    this.onEnabled()
  }

  async onEnabled(): Promise<void> {
    await this.pluginManager.onEnabled()
    this.serverManager.onEnabled()
    this.consoleManager.onEnabled()
    this.commandManager.onEnabled()
    this.playerManager.onEnabled()
    this.agentManager.onEnabled()
    this.scoreboardManager.onEnabled()
    this.eventManager.onEnabled()
  }

  async onDisabled(): Promise<void> {
    this.pluginManager.onDisabled()
    this.serverManager.onDisabled()
    this.consoleManager.onDisabled()
    this.commandManager.onDisabled()
    this.playerManager.onDisabled()
    this.agentManager.onDisabled()
    this.scoreboardManager.onDisabled()
    this.eventManager.onDisabled()
    setTimeout(() => {
      console.log('')
    }, 2000)
  }

  getLogger(): Logger {
    return this.logger
  }

  getPluginManager(): pluginManager {
    return this.pluginManager
  }

  getServerManager(): serverManager {
    return this.serverManager
  }

  getConsoleManager(): consoleManager {
    return this.consoleManager
  }

  getCommandManager(): commandManager {
    return this.commandManager
  }

  getPlayerManager(): playerManager {
    return this.playerManager
  }

  getAgentManager(): agentManager {
    return this.agentManager
  }

  getScoreboardManager(): scoreboardManager {
    return this.scoreboardManager
  }

  getEventManager(): eventManager {
    return this.eventManager
  }

}

export default bewss
