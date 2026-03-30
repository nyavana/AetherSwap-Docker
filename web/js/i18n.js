const I18N_LOCALE_STORAGE_KEY = "aetherswap_locale_pref";
const I18N_SUPPORTED_PREFERENCES = new Set(["auto", "en-US", "zh-CN"]);

const I18N_EXACT = {
  "en-US": {
    "自动化交易终端": "Automated trading terminal",
    "仪表盘": "Dashboard",
    "库存管理": "Inventory",
    "持有饰品": "Holdings",
    "操作记录": "Transaction history",
    "数据分析": "Analytics",
    "上架记录": "Listings",
    "账号管理": "Accounts",
    "Steam 令牌": "Steam Guard",
    "代理池": "Proxy pool",
    "系统设置": "Settings",
    "运行日志": "Logs",
    "Steam 折扣": "Steam deals",
    "Steam 赠礼": "Steam gifting",
    "切换外观": "Change theme",
    "初始化中": "Starting up",
    "总出售金额": "Total sold",
    "营收": "Revenue",
    "已购买投入": "Total spent",
    "总收益": "Total profit",
    "实际折扣比率": "Effective discount ratio",
    "等待系统初始化": "Waiting for startup",
    "退出程序": "Quit app",
    "停止运行": "Stop",
    "等待支付": "Waiting for payment",
    "订单待处理": "Order pending",
    "打开链接": "Open link",
    "复制": "Copy",
    "放弃": "Cancel",
    "已完成支付": "Payment complete",
    "手动添加购入": "Add purchase manually",
    "物品名称": "Item name",
    "或 Steam 市场链接（优先取英文名）": "Or Steam Market URL (prefer the English market name)",
    "价格": "Price",
    "数量": "Quantity",
    "添加": "Add",
    "时间": "Time",
    "物品/说明": "Item / details",
    "购入价": "Purchase price",
    "购入市场价": "Market price at purchase",
    "现市场价": "Current market price",
    "税后价格": "After-fee price",
    "变现收益": "Cash-out profit",
    "自用收益": "Keep-for-use profit",
    "市场变动": "Market change",
    "操作": "Actions",
    "物品说明": "Item details",
    "出售状态": "Sale status",
    "出售价格": "Sale price",
    "价格偏离度": "Price deviation",
    "刷新": "Refresh",
    "金额": "Amount",
    "饰品交易统计": "Item trade summary",
    "饰品名称": "Item name",
    "购入均价": "Average purchase price",
    "购入市场均价": "Average market price at purchase",
    "总出售额": "Total sold amount",
    "出售均价": "Average sale price",
    "实际折扣比例均值": "Average effective discount ratio",
    "总变现收益": "Total cash-out profit",
    "价格偏离度均值": "Average price deviation",
    "Steam 多账号 · 本地保存": "Multiple Steam accounts · stored locally",
    "搜索用户名 / Steam ID": "Search username / Steam ID",
    "选择一个账号": "Select an account",
    "在左侧选择账号查看详情，或点击「添加」创建新账号。": "Pick an account on the left to view details, or click Add to create one.",
    "添加账号": "Add account",
    "密码为可选项：仅用于自动填充，界面不会展示明文。": "Password is optional. It is only used for autofill and is never shown in plain text.",
    "Steam 用户名": "Steam username",
    "登录名": "Login name",
    "密码（可选，用于自动填充）": "Password (optional, used for autofill)",
    "保存后仅用于自动填充": "Saved only for autofill",
    "Steam ID（可选，登录后自动获取）": "Steam ID (optional, fetched after login)",
    "显示名（登录后自动获取）": "Display name (fetched after login)",
    "个人资料名称": "Profile name",
    "取消": "Cancel",
    "保存": "Save",
    "iFlow 配置": "iFlow settings",
    "游戏代码": "Game code",
    "目标平台": "Target platforms",
    "排序策略": "Sort strategy",
    "最优寄售": "Best sell listing",
    "最优求购": "Best buy order",
    "稳定求购": "Stable buy order",
    "近期成交": "Recent sales",
    "最低价": "Minimum price",
    "最高价": "Maximum price",
    "Buff 交易策略": "Buff trading strategy",
    "支付方式": "Payment method",
    "支付宝 (Alipay)": "Alipay",
    "微信 (WeChat)": "WeChat Pay",
    "目标余额": "Target wallet balance",
    "最高折扣": "Maximum discount",
    "巨额利润阈值差 (默认0.05)": "Huge-profit threshold delta (default 0.05)",
    "iflow 取前N条": "Top N rows from iFlow",
    "关键词排除 (每行一个)": "Excluded keywords (one per line)",
    "启动时间限制": "Run window",
    "启用启动时间限制": "Enable run window",
    "开启后，仅在下方时段内执行倒余额（拉取/购买）；非时段内会等待。": "When enabled, purchase activity only runs during the time window below. Outside that window the app waits.",
    "开始时间（几点）": "Start hour",
    "结束时间（几点）": "End hour",
    "出售策略": "Sell strategy",
    "策略": "Strategy",
    "策略1：可出售后立即上架": "Strategy 1: list as soon as the item is tradable",
    "策略2：可出售后查趋势，下降则按最新价+补偿上架，上升则等待": "Strategy 2: check the trend after tradable; list on downtrend, wait on uptrend",
    "策略3：智能判断汇率利润，避免低价售出": "Strategy 3: use FX-aware profit checks to avoid selling too low",
    "策略4：暂停自动出售（手动出售）": "Strategy 4: pause auto selling (manual only)",
    "价格补偿 (策略1/2，±元)": "Price offset (Strategy 1/2, +/- CNY)",
    "价格墙数量阈值": "Price wall volume threshold",
    "断层跳跃容忍量": "Gap-jump tolerance",
    "出售趋势判断天数 (策略2)": "Trend window in days (Strategy 2)",
    "同名在售上限": "Max active listings per item",
    "上架间隔(秒)": "Listing interval (seconds)",
    "出售比率": "Resell ratio",
    "安全采购-硬上限": "Safe purchase hard cap",
    "安全采购-流动性比例": "Safe purchase liquidity ratio",
    "低价阈值(元)": "Low-price threshold (CNY)",
    "低价惩罚系数": "Low-price penalty factor",
    "低价硬上限": "Low-price hard cap",
    "卖压-前N档": "Sell pressure depth",
    "卖压-阈值": "Sell pressure threshold",
    "自动确认上架": "Auto-confirm listings",
    "推送与邮箱确认": "Notifications and email confirmation",
    "定时回报间隔（小时）": "Scheduled report interval (hours)",
    "紧急跌幅阈值（%）": "Emergency drop threshold (%)",
    "QQ 邮箱账号": "QQ Mail account",
    "邮箱授权码": "Mail app password",
    "非QQ密码": "Not your QQ account password",
    "IMAP 服务器": "IMAP server",
    "指令发件人(含昵称)": "Expected sender (name included)",
    "允许的发件人邮箱": "Allowed sender email",
    "成功付款邮件标题": "Payment success subject",
    "付款失败邮件标题": "Payment failure subject",
    "邮箱等待超时(秒)": "Email wait timeout (seconds)",
    "系统参数": "System settings",
    "CV 阈值": "CV threshold",
    "R² 趋势阈值": "R² trend threshold",
    "价格分位上限": "Price percentile ceiling",
    "RISING R² 审慎阈值": "RISING R² caution threshold",
    "RISING 日斜率上限": "RISING daily slope ceiling",
    "MA7/MA30 偏离上限": "MA7/MA30 deviation ceiling",
    "last_price/MA30 上限": "last_price / MA30 ceiling",
    "STABLE slope 下限": "STABLE slope floor",
    "RISING 分位上限": "RISING percentile ceiling",
    "使用VWAP": "Use VWAP",
    "无符合时重试间隔（秒）": "Retry interval when nothing matches (seconds)",
    "库存自动刷新 (秒)": "Inventory auto-refresh (seconds)",
    "操作记录现市场价刷新间隔 (分钟)": "Refresh interval for current market prices in history (minutes)",
    "汇率刷新间隔(小时)": "Exchange-rate refresh interval (hours)",
    "界面缩放比例(内部浏览器)": "UI zoom (embedded browser)",
    "语言": "Language",
    "自动": "Auto",
    "English (US)": "English (US)",
    "简体中文": "Simplified Chinese",
    "Steam 折扣数据": "Steam deals data",
    "自动更新间隔 (天)": "Auto-refresh interval (days)",
    "游戏并发数": "Game concurrency",
    "区域并发数": "Region concurrency",
    "导出配置": "Export config",
    "恢复出厂设置": "Factory reset",
    "同步售出/持有": "Sync sold items / holdings",
    "紧急修复": "Emergency repair",
    "保存所有设置": "Save all settings",
    "库存总数": "Inventory count",
    "库存价值": "Inventory value",
    "税后价值": "After-fee value",
    "立即刷新": "Refresh now",
    "链接": "Links",
    "可出售": "Marketable",
    "可交易": "Tradable",
    "解禁时间": "Trade lock ends",
    "最低价": "Lowest price",
    "状态说明": "Status details",
    "点击显示令牌": "Click to show code",
    "您的账号受到 Steam Guard 保护": "Your account is protected by Steam Guard",
    "代理 IP 池管理": "Proxy pool management",
    "管理出口代理节点，支持策略切换、连通性检测与批量导入": "Manage outbound proxies, switch routing strategy, test connectivity, and import in bulk.",
    "路由策略": "Routing strategy",
    "策略 1": "Strategy 1",
    "本机优先": "Prefer local connection",
    "失败或超时后切换代理重试": "Retry with a proxy after failure or timeout",
    "策略 2": "Strategy 2",
    "完全走代理": "Always use proxies",
    "所有请求经代理池轮询发出": "Send all requests through the proxy pool",
    "策略 3": "Strategy 3",
    "关闭代理": "Disable proxies",
    "全部走本机，代理池停用": "Use the local connection only and disable the proxy pool",
    "测试参数": "Test settings",
    "欢迎使用 AetherSwap": "Welcome to AetherSwap",
    "检测到您尚未完成基础配置，建议按向导快速填写关键参数。全程约需 2 分钟，也可跳过后在「设置」面板手动配置。": "Basic setup is still incomplete. Use the guided setup to fill in the key fields. It takes about two minutes, or you can skip it and configure everything manually in Settings.",
    "Steam 令牌密钥": "Steam Guard secrets",
    "推送通知 Token": "Notification token",
    "Buff 账号登录": "Buff login",
    "打开浏览器登录 Buff": "Open browser for Buff login",
    "已完成登录 ✓": "Login complete",
    "请使用手机 APP 扫描此二维码": "Scan this QR code with the mobile app",
    "添加 Steam 账号": "Add a Steam account",
    "引导结束后，点击左侧导航栏的「账号」即可添加账号。": "After the guide finishes, open Accounts in the left sidebar to add your Steam account.",
    "不再显示此引导": "Do not show this guide again",
    "跳过": "Skip",
    "开始配置 →": "Start setup ->",
    "欢迎使用 AetherSwap": "Welcome to AetherSwap",
    "用于自动生成 Steam Guard 验证码和确认交易，是自动挂刀的核心凭据。": "Used to generate Steam Guard codes and confirm listings automatically.",
    "必填": "Required",
    "Steam Guard 共享密钥": "Steam Guard shared_secret",
    "Steam 身份密钥": "Steam identity_secret",
    "可在 Steam 手机客户端的令牌数据或第三方工具中提取。": "You can extract these from the Steam mobile app token data or a trusted third-party tool.",
    "用于在交易完成或出错时向您的微信/公众号发送通知。": "Used to send notifications when trades finish or fail.",
    "前往 pushplus.plus 获取": "Get it from pushplus.plus",
    "可选配置，跳过后不影响核心交易功能，但不会收到消息推送。": "Optional. Skipping it does not block trading, but you will not receive notifications.",
    "AetherSwap 需要您的 Buff Cookie 来读取市场数据和下单。点击下方按钮将弹出浏览器，在其中完成 Buff 登录后返回点击「已完成登录」。": "AetherSwap needs your Buff cookie to read market data and place orders. Click the button below, complete Buff login in the browser, then return and confirm it.",
    "可跳过，后续在运行过程中若 Buff 登录过期也会自动提示重新登录。": "You can skip this for now. If Buff login expires later, the app will prompt you again.",
    "配置完成后，需要在「账号管理」面板添加并登录一个 Steam 账号，机器人才能执行交易。": "After setup, add and log into a Steam account in Accounts so the bot can trade.",
    "跳过全部": "Skip all",
    "完成引导 ✓": "Finish guide",
    "下一步 →": "Next ->",
    "填写 Steam 令牌密钥（<span class='gs-link' onclick='document.querySelector(\"[data-tab=settings]\").click()'>系统设置 → Steam 令牌</span>）": "Add your Steam Guard secrets (<span class='gs-link' onclick='document.querySelector(\"[data-tab=settings]\").click()'>Settings -> Steam Guard</span>)",
    "填写 PushPlus 推送 Token（<span class='gs-link' onclick='document.querySelector(\"[data-tab=settings]\").click()'>系统设置 → 推送与邮箱</span>）": "Add your PushPlus token (<span class='gs-link' onclick='document.querySelector(\"[data-tab=settings]\").click()'>Settings -> Notifications</span>)",
    "添加 Steam 账号并登录（<span class='gs-link' onclick='document.querySelector(\"[data-tab=accounts]\").click()'>账号管理</span>）": "Add and sign in to a Steam account (<span class='gs-link' onclick='document.querySelector(\"[data-tab=accounts]\").click()'>Accounts</span>)",
    "返回仪表盘点击「启动任务」🚀": "Return to the dashboard and click Start",
    "运行中": "Running",
    "错误": "Error",
    "已停止": "Stopped",
    "空闲中": "Idle",
    "发生错误": "Error",
    "请看调试日志": "Check the debug log",
    "微信支付链接（可复制到浏览器）": "WeChat Pay link (copy into a browser)",
    "打开支付链接": "Open payment link",
    "订单: ": "Order: ",
    "Buff 登录已过期": "Buff login expired",
    "点击下方按钮获取登录二维码，使用手机 APP 扫描完成登录。": "Get a login QR code below and scan it with the mobile app.",
    "获取登录二维码": "Get login QR code",
    "Steam 登录已过期": "Steam login expired",
    "需要二次验证（验证码），请点击下方按钮打开浏览器并完成 Steam 登录。": "Steam Guard code required. Open the browser below and finish the Steam login flow.",
    "登录已过期，请在弹出的浏览器中重新登录 Steam，完成后点击下方按钮继续。": "Your Steam session expired. Re-login in the browser, then click the button below to continue.",
    "打开浏览器并登录": "Open browser and sign in",
    "是": "Yes",
    "否": "No",
    "(不可上架)": "(not marketable)",
    "(不可交易)": "(not tradable)",
    "暂无数据": "No data",
    "加载失败": "Load failed",
    "已复制链接": "Link copied",
    "程序正在退出": "The app is shutting down",
    "您可以安全地直接关闭此窗口": "You can safely close this window",
    "程序已退出": "The app has exited",
    "设置已保存": "Settings saved",
    "保存失败": "Save failed",
    "请稍后再试": "Please try again later",
    "请填写物品名称或 Steam 市场链接": "Enter an item name or a Steam Market URL",
    "请填写有效价格": "Enter a valid price",
    "goods_id 须为数字": "`goods_id` must be numeric",
    "添加失败": "Add failed",
    "已添加操作记录": "Transaction added",
    "详细调试 ": "Verbose debug ",
    "已开启，下次运行生效": "enabled, effective next run",
    "已关闭": "disabled",
    "Steam 在售/历史调试 ": "Steam listing/history debug ",
    "警告：此操作将清空所有数据（包括交易记录、自动挂刀配置、绑定的 Steam 账号与凭据）！\n\n您确定要进行“恢复出厂设置”吗？": "Warning: this clears all data, including transactions, automated listing config, and saved Steam accounts and credentials.\n\nContinue with a factory reset?",
    "再次确认：数据一旦清空将无法恢复。是否继续？": "Final check: this cannot be undone. Continue?",
    "数据已清空，即将刷新页面": "Data cleared. Reloading the page",
    "初始化失败": "Reset failed",
    "正在同步": "Syncing",
    "请稍候…": "Please wait...",
    "同步成功": "Sync complete",
    "无变更": "No changes",
    "同步失败": "Sync failed",
    "未知错误": "Unknown error",
    "请求异常": "Request error",
    "正在紧急修复": "Running emergency repair",
    "紧急修复成功": "Emergency repair complete",
    "紧急修复完成": "Emergency repair finished",
    "紧急修复失败": "Emergency repair failed",
    "已保存": "Saved",
    "请输入有效售出价格": "Enter a valid sale price",
    "操作失败": "Action failed",
    "已记录售出": "Sale recorded",
    "请先勾选要删除的项": "Select at least one record to delete",
    "请先勾选要售出的项": "Select at least one record to sell",
    "请先勾选要删除的项": "Select at least one record to delete",
    "请先勾选要售出的项": "Select at least one record to sell",
    "主题已切换": "Theme changed",
    "跟随系统": "System",
    "深色": "Dark",
    "浅色": "Light",
    "请求失败": "Request failed",
    "日志已清空": "Log cleared",
    "清空失败": "Clear failed",
    "继续": "Resume",
    "暂停": "Pause",
    "自动滚动：": "Auto-scroll: ",
    "开": "On",
    "关": "Off",
    "已暂停刷新": "Paused refresh",
    "已继续刷新": "Resumed refresh",
    "自动滚动": "Auto-scroll",
    "已下载日志": "Log downloaded",
    "日志已导出": "Log exported",
    "导出失败": "Export failed",
    "日志已导出": "Log exported",
    "请先填写主机和端口": "Enter the host and port first",
    "主机和端口为必填项": "Host and port are required",
    "已添加": "Added",
    "请输入代理列表": "Paste a proxy list first",
    "代理列表为空": "Proxy list is empty",
    "请先添加代理 IP": "Add at least one proxy first",
    "测试中...": "Testing...",
    "测试失败": "Test failed",
    "请检查后端日志": "Check the backend logs",
    "测试连通性": "Test connectivity",
    "代理池配置已保存": "Proxy pool settings saved",
    "确定要清空所有": "Clear all",
    "清除中...": "Clearing...",
    "已清空代理列表": "Proxy list cleared",
    "清除失败": "Clear failed",
    "🗑 清除全部": "Clear all",
    "请先填写 Webshare API Key": "Enter your Webshare API key first",
    "在测试参数区域输入后再点击获取": "Enter it under Test settings, then click Fetch",
    "获取中...": "Fetching...",
    "✅ 获取成功": "Fetch complete",
    "获取失败": "Fetch failed",
    "请检查 API Key 或账户状态": "Check the API key and account status",
    "☁ 获取订阅": "Fetch subscription",
    "当前": "Current",
    "验证": "Verify",
    "设为当前": "Set current",
    "编辑": "Edit",
    "删除": "Delete",
    "显示名": "Display name",
    "头像": "Avatar",
    "结算币种": "Settlement currency",
    "地区": "Region",
    "安全提示：": "Security note:",
    "若你选择保存密码，仅用于自动填充登录。建议系统环境保持可信，定期更换密码并开启 Steam 令牌等二次验证。": "If you save a password, it is only used to autofill login. Keep the system trusted, rotate passwords regularly, and enable Steam Guard.",
    "确定删除此账号？": "Delete this account?",
    "已切换当前账号": "Current account changed",
    "失败": "Failed",
    "验证中…": "Verifying...",
    "验证通过": "Verification passed",
    "可自动登录": "Ready for automatic login",
    "需要二次验证": "Steam Guard code required",
    "验证未通过": "Verification failed",
    "请检查账号密码": "Check the account username and password",
    "验证失败": "Verification failed",
    "正在加载二维码": "Loading QR code",
    "已打开浏览器": "Browser opened",
    "打开失败": "Open failed",
    "正在更新…": "Updating...",
    "登录信息已更新": "Login details updated",
    "更新失败": "Update failed",
    "完成登录": "Finish login",
    "账号列表": "Accounts",
    "未找到匹配账号": "No matching accounts",
    "未命名": "Unnamed",
    "添加失败": "Add failed",
    "加载数据分析失败": "Failed to load analytics",
    "下架": "Delist",
    "售出": "Mark sold",
    "待收货": "Awaiting delivery",
    "已出售": "Sold",
    "出售中": "Listed",
    "持有中": "Holding",
    "下架中": "Delisting",
    "下架成功": "Delisted",
    "下架失败": "Delist failed",
    "确定删除这条记录？": "Delete this record?",
    "确定删除这条记录？删除后将从持有饰品与操作记录中同时移除。": "Delete this record? It will be removed from both Holdings and Transaction history.",
    "确定下架该饰品？下架后 assetid 会变更。": "Delist this item? Its assetid will change afterwards.",
    "新 assetid 为空，请使用「同步售出/持有」补全": "The new assetid is empty. Use Sync sold items / holdings to fill it in.",
    "暂无代理，请添加": "No proxies yet. Add one to get started.",
    "未测试": "Not tested",
    "✓ 正常": "OK",
    "✗ 失败": "Failed",
    "好评如潮": "Overwhelmingly Positive",
    "特别好评": "Very Positive",
    "多半好评": "Mostly Positive",
    "褒贬不一": "Mixed",
    "差评": "Negative",
    "中国": "China mainland",
    "国区": "China mainland",
    "俄区": "Russia",
    "哈萨克": "Kazakhstan",
    "乌克兰": "Ukraine",
    "南亚": "South Asia",
    "土区": "Turkey",
    "阿根廷": "Argentina",
    "阿塞拜疆": "Azerbaijan",
    "越南": "Vietnam",
    "印尼": "Indonesia",
    "印度": "India",
    "巴西": "Brazil",
    "智利": "Chile",
    "日本": "Japan",
    "港区": "Hong Kong",
    "菲律宾": "Philippines",
    "新史低": "New all-time low",
    "平史低": "Matches all-time low",
    "Steam 商店": "Steam Store",
    "获取数据": "Fetch data",
    "查看全部区域 ▾": "Show all regions ▾",
    "收起 ▴": "Collapse ▴",
    "尚未获取数据": "No data fetched yet",
    "暂无数据，请点击上方「获取数据」按钮开始抓取": "No data yet. Click Fetch data above to start.",
    "Steam 自动赠礼": "Steam gifting",
    "赠礼进行中...": "Sending gift...",
    "跳过此步": "Skip this step",
    "正在加载二维码，请稍候…": "Loading QR code. Please wait...",
    "请使用手机 APP 扫描下方二维码": "Scan the QR code below with the mobile app",
    "正在保存 Cookie，请稍候…": "Saving cookies. Please wait...",
    "✅ Buff Cookie 已保存！": "Buff cookie saved",
    "网络错误": "Network error",
    "获取好友失败": "Failed to load friends",
    "好友列表为空": "Friend list is empty",
    "未找到可购买的版本，请确认链接有效且该游戏支持赠礼": "No purchasable editions were found. Check the URL and make sure the game supports gifting.",
    "捆绑包": "Bundle",
    "标准包": "Standard edition",
    "请输入 Steam 商店链接": "Enter a Steam Store URL",
    "链接格式不正确，需包含 store.steampowered.com/app/": "The URL is invalid. It must include `store.steampowered.com/app/`.",
    "获取商品失败": "Failed to load the product",
    "获取鉴权令牌": "Get auth token",
    "清空购物车": "Clear cart",
    "加入购物车": "Add to cart",
    "提取订单流水号": "Get order transaction ID",
    "设定赠礼目标": "Set gift recipient",
    "执行最终结账": "Complete checkout",
    "赠礼完成！": "Gift complete",
    "赠礼失败": "Gift failed",
    "赠礼成功": "Gift sent",
    "任务创建失败": "Failed to create the task",
    "从未": "Never",
    "刚刚": "Just now",
    "共": "",
    "账号不存在": "Account not found",
    "删除失败": "Delete failed",
    "记录不存在或索引无效": "Record not found or index is invalid",
    "更新失败（记录不存在或无效）": "Update failed: record not found or invalid",
    "更新失败": "Update failed",
    "索引无效": "Invalid index",
    "该记录非出售中状态": "This record is not currently listed",
    "无 assetid": "Missing assetid",
    "未发送(无持有/无Token/无Steam凭证)": "Not sent (missing holdings, token, or Steam credentials)",
    "正在停止并清理...": "Stopping and cleaning up...",
    "Steam 后台请求不可用": "Steam background requests are unavailable",
    "接收到停止运行指令，正在终止任务...": "Stop requested. Shutting down active tasks...",
    "打开浏览器超时": "Timed out while opening the browser",
    "未在重新登录流程中": "No relogin flow is active",
    "未配置 shared_secret": "`shared_secret` is not configured",
    "shared_secret 无效": "`shared_secret` is invalid",
    "Steam 凭证未配置，请先登录 Steam": "Steam credentials are missing. Sign in to Steam first.",
    "Steam steam_id 未配置": "Steam `steam_id` is not configured",
    "无法从链接中解析 App ID": "Could not parse an App ID from the URL",
    "任务不存在": "Task not found",
    "代理列表已清空": "Proxy list cleared",
    "未配置 Webshare API Key，请先在代理池设置中填写": "Webshare API key is missing. Add it in Proxy pool settings first.",
    "API Key 无效或已过期（401 Unauthorized）": "The API key is invalid or expired (401 Unauthorized).",
    "未获取到任何代理，请检查账户或套餐状态": "No proxies were returned. Check your account and plan status.",
    "正在获取中，请等待完成": "Fetch already in progress. Wait for it to finish.",
    "已开始获取": "Fetch started",
    "另一个自动登录刚刚完成": "Another automatic login just finished",
    "另一个自动登录正在进行": "Another automatic login is already in progress",
    "未设置当前 Steam 账号，无法自动登录": "No current Steam account is set, so automatic login cannot continue.",
    "未保存账号或密码，无法自动登录": "No saved username or password. Automatic login cannot continue.",
    "已自动登录并更新凭证": "Signed in automatically and refreshed credentials",
    "账号或密码错误": "Incorrect username or password",
    "需要二次验证且未配置 shared_secret，请配置后重试": "Steam Guard code required. Add `shared_secret` and try again.",
    "Steam 触发了人机验证，请稍后重试": "Steam triggered a CAPTCHA. Try again later.",
    "未保存账号或密码，无法验证": "No saved username or password to verify.",
    "请求失败": "Request failed",
    "FETCHING_DEALS": "Fetching deals",
    "CHECKING_STABILITY": "Checking stability",
    "CHECKOUT_PENDING": "Checkout pending",
    "CONFIG_ERROR": "Configuration error",
    "PROXY_WARMUP": "Warming up the proxy pool",
    "TIME_LIMIT_WAIT": "Waiting for the allowed run window",
    "NETWORK_OFFLINE": "Network offline",
    "BUFF_AUTH_EXPIRED": "Buff login expired",
    "STEAM_COOLDOWN": "Steam cooldown",
    "WAITING_RETRY": "Waiting to retry",
    "STABILITY_CHECK": "Stability check",
  },
};

const I18N_REGEX = {
  "en-US": [
    [/^共 (\d+) 款$/, (_, count) => `${count} titles`],
    [/^数据库 (\d+) 款$/, (_, count) => `${count} in database`],
    [/^已导入 (\d+) 条代理$/, (_, count) => `Imported ${count} proxies`],
    [/^已导入 (\d+) 条，(\d+) 条失败$/, (_, ok, bad) => `Imported ${ok}, ${bad} failed`],
    [/^已加载 (\d+) 位好友$/, (_, count) => `Loaded ${count} friends`],
    [/^已找到 (\d+) 个版本$/, (_, count) => `Found ${count} editions`],
    [/^行(\d+): 格式错误$/, (_, line) => `Line ${line}: invalid format`],
    [/^行(\d+): IP 或端口无效$/, (_, line) => `Line ${line}: invalid IP or port`],
    [/^测试完成：(\d+) 成功 \/ (\d+) 失败$/, (_, ok, fail) => `Test finished: ${ok} passed / ${fail} failed`],
    [/^已保存 (\d+) 行 → (.+)$/, (_, lines, path) => `Saved ${lines} lines to ${path}`],
    [/^已删除 (\d+) 条$/, (_, count) => `Deleted ${count} records`],
    [/^批量售出（共 (\d+) 条）$/, (_, count) => `Bulk sale (${count} items)`],
    [/^已批量记录售出 (\d+) 条$/, (_, count) => `Recorded ${count} sales`],
    [/^已添加 (\d+) 条操作记录$/, (_, count) => `Added ${count} transactions`],
    [/^已导入 (\d+) 个代理$/, (_, count) => `Imported ${count} proxies`],
    [/^上次更新：(.+)$/, (_, when) => `Last updated: ${when}`],
    [/^订单: (.+)$/, (_, name) => `Order: ${name}`],
    [/^新 assetid: (.+)$/, (_, assetid) => `New assetid: ${assetid}`],
    [/^售出更新 (\d+) 条，填充 assetid (\d+) 条$/, (_, updated, filled) => `Updated ${updated} sold records, filled ${filled} assetids`],
    [/^已填入 (\d+)\/(\d+) 条，状态已更新$/, (_, filled, total) => `Filled ${filled}/${total}; statuses updated`],
    [/^填入 (\d+)\/(\d+) 条，未填入 (\d+) 条$/, (_, filled, total, missing) => `Filled ${filled}/${total}; ${missing} still missing`],
    [/^准备向「(.+)」赠送「(.+)」(.*)$/, (_, friend, item, price) => `Ready to gift "${item}" to "${friend}"${price || ""}`],
    [/^已选好友：(.+)，请选择商品版本$/, (_, friend) => `Selected friend: ${friend}. Pick an edition.`],
    [/^网络错误：(.+)$/, (_, message) => `Network error: ${message}`],
    [/^赠礼失败: (.+)$/, (_, message) => `Gift failed: ${message}`],
    [/^❌ 余额不足！当前钱包 (.+)，商品售价 (.+)$/, (_, balance, price) => `Insufficient balance. Wallet: ${balance}, price: ${price}`],
    [/^当前钱包余额：(.+)$/, (_, balance) => `Wallet balance: ${balance}`],
    [/^商品售价：(.+)$/, (_, price) => `Price: ${price}`],
    [/^省 ?¥([0-9.]+)$/, (_, amount) => `Save CN¥${amount}`],
    [/^贵 ?¥([0-9.]+)$/, (_, amount) => `CN¥${amount} more`],
    [/^降¥([0-9.]+)$/, (_, amount) => `Down CN¥${amount}`],
    [/^省¥([0-9.]+) · 值([0-9.]+)%$/, (_, amount, ratio) => `Save CN¥${amount} · ${ratio}% better`],
    [/^(\d+) 行$/, (_, count) => `${count} lines`],
    [/^(\d+) 分钟前$/, (_, count) => `${count} min ago`],
    [/^(\d+) 小时前$/, (_, count) => `${count} hr ago`],
    [/^(\d+) 天前$/, (_, count) => `${count} day${count === "1" ? "" : "s"} ago`],
    [/^已成功获取并配置 (\d+) 个代理$/, (_, count) => `Fetched and configured ${count} proxies`],
    [/^同步成功$/, () => "Sync complete"],
  ],
};

let i18nPreference = "auto";
let i18nLocale = "en-US";
let i18nObserver = null;
let i18nMutating = false;
const i18nTextOriginals = new WeakMap();
const i18nAttrOriginals = new WeakMap();

function i18nNormalizePreference(value) {
  return I18N_SUPPORTED_PREFERENCES.has(value) ? value : "auto";
}

function i18nDetectLocale() {
  const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "en-US"];
  return langs.some((lang) => String(lang).toLowerCase().startsWith("zh")) ? "zh-CN" : "en-US";
}

function i18nResolveLocale(preference = i18nPreference) {
  return preference === "auto" ? i18nDetectLocale() : preference;
}

function i18nTranslateCore(source, locale = i18nLocale) {
  if (!source || locale === "zh-CN") return source;
  const exact = I18N_EXACT[locale]?.[source];
  if (typeof exact === "string") return exact;
  const rules = I18N_REGEX[locale] || [];
  for (const [pattern, replacer] of rules) {
    if (pattern.test(source)) return source.replace(pattern, replacer);
  }
  return source;
}

function i18nTranslateText(text, locale = i18nLocale) {
  if (typeof text !== "string") return text;
  const leading = text.match(/^\s*/)?.[0] || "";
  const trailing = text.match(/\s*$/)?.[0] || "";
  const core = text.slice(leading.length, text.length - trailing.length);
  if (!core) return text;
  return leading + i18nTranslateCore(core, locale) + trailing;
}

function i18nFormatTime(date, options = {}) {
  const resolved = i18nResolveLocale();
  return new Intl.DateTimeFormat(resolved, {
    hour: "numeric",
    minute: "2-digit",
    ...options,
  }).format(date);
}

function i18nFormatDateTime(date, options = {}) {
  const resolved = i18nResolveLocale();
  return new Intl.DateTimeFormat(resolved, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    ...options,
  }).format(date);
}

function i18nFormatRelativeTime(tsSeconds) {
  if (!tsSeconds) return i18nTranslateText("从未");
  const diff = Math.round(tsSeconds - Date.now() / 1000);
  const abs = Math.abs(diff);
  if (abs < 60) return i18nTranslateText("刚刚");
  const rtf = new Intl.RelativeTimeFormat(i18nResolveLocale(), { numeric: "auto" });
  if (abs < 3600) return rtf.format(Math.round(diff / 60), "minute");
  if (abs < 86400) return rtf.format(Math.round(diff / 3600), "hour");
  return rtf.format(Math.round(diff / 86400), "day");
}

function i18nFormatCurrency(value, currency = "CNY", options = {}) {
  if (value == null || Number.isNaN(Number(value))) return i18nTranslateText("—");
  return new Intl.NumberFormat(i18nResolveLocale(), {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(Number(value));
}

function i18nFormatCompactNumber(value) {
  if (value == null || Number.isNaN(Number(value))) return "0";
  return new Intl.NumberFormat(i18nResolveLocale(), {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(Number(value));
}

function i18nTranslateTextNode(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  if (!i18nTextOriginals.has(node)) i18nTextOriginals.set(node, node.nodeValue);
  const source = i18nTextOriginals.get(node) || "";
  const translated = i18nTranslateText(source);
  if (node.nodeValue !== translated) node.nodeValue = translated;
}

function i18nGetAttrStore(el) {
  let store = i18nAttrOriginals.get(el);
  if (!store) {
    store = {};
    i18nAttrOriginals.set(el, store);
  }
  return store;
}

function i18nTranslateAttribute(el, name) {
  if (!el || !el.hasAttribute || !el.hasAttribute(name)) return;
  const store = i18nGetAttrStore(el);
  if (!(name in store)) store[name] = el.getAttribute(name);
  const source = store[name];
  const translated = i18nTranslateText(source);
  if (el.getAttribute(name) !== translated) el.setAttribute(name, translated);
}

function i18nTranslateElement(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
  ["placeholder", "title", "aria-label", "alt"].forEach((attr) => i18nTranslateAttribute(el, attr));
}

function i18nTranslateTree(root = document) {
  if (!root) return;
  i18nMutating = true;
  try {
    if (root.nodeType === Node.TEXT_NODE) {
      i18nTranslateTextNode(root);
      return;
    }
    if (root.nodeType === Node.ELEMENT_NODE) i18nTranslateElement(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
      acceptNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
        if (node.nodeType === Node.ELEMENT_NODE) return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_REJECT;
      },
    });
    let current = walker.currentNode;
    while (current) {
      if (current.nodeType === Node.TEXT_NODE) i18nTranslateTextNode(current);
      else if (current.nodeType === Node.ELEMENT_NODE) i18nTranslateElement(current);
      current = walker.nextNode();
    }
    document.documentElement.lang = i18nLocale;
  } finally {
    i18nMutating = false;
  }
}

function i18nStartObserver() {
  if (i18nObserver || !document.body) return;
  i18nObserver = new MutationObserver((mutations) => {
    if (i18nMutating) return;
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => i18nTranslateTree(node));
      } else if (mutation.type === "characterData") {
        i18nTextOriginals.set(mutation.target, mutation.target.nodeValue);
        i18nTranslateTree(mutation.target);
      } else if (mutation.type === "attributes" && mutation.target?.nodeType === Node.ELEMENT_NODE) {
        const store = i18nGetAttrStore(mutation.target);
        store[mutation.attributeName] = mutation.target.getAttribute(mutation.attributeName);
        i18nTranslateElement(mutation.target);
      }
    }
  });
  i18nObserver.observe(document.body, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["placeholder", "title", "aria-label", "alt"],
  });
}

function i18nApplyDocument() {
  i18nLocale = i18nResolveLocale();
  i18nTranslateTree(document.documentElement);
  i18nStartObserver();
  document.documentElement.classList.remove("i18n-pending");
  document.dispatchEvent(new CustomEvent("aetherswap:localechange", {
    detail: { preference: i18nPreference, locale: i18nLocale },
  }));
}

function i18nSetPreference(preference, persist = true) {
  i18nPreference = i18nNormalizePreference(preference);
  if (persist) localStorage.setItem(I18N_LOCALE_STORAGE_KEY, i18nPreference);
  i18nApplyDocument();
}

function i18nInit() {
  i18nPreference = i18nNormalizePreference(localStorage.getItem(I18N_LOCALE_STORAGE_KEY) || "auto");
  i18nLocale = i18nResolveLocale();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", i18nApplyDocument, { once: true });
  } else {
    i18nApplyDocument();
  }
  const nativeConfirm = window.confirm.bind(window);
  window.confirm = (message) => nativeConfirm(i18nTranslateText(String(message ?? "")));
}

window.I18n = {
  getPreference() {
    return i18nPreference;
  },
  getLocale() {
    return i18nLocale;
  },
  setPreference(preference, persist = true) {
    i18nSetPreference(preference, persist);
  },
  syncFromConfig(preference) {
    i18nSetPreference(preference, true);
  },
  translateText(text) {
    return i18nTranslateText(text);
  },
  translateTree(root) {
    i18nTranslateTree(root);
  },
  formatTime(date, options) {
    return i18nFormatTime(date, options);
  },
  formatDateTime(date, options) {
    return i18nFormatDateTime(date, options);
  },
  formatRelativeTime(tsSeconds) {
    return i18nFormatRelativeTime(tsSeconds);
  },
  formatCurrency(value, currency, options) {
    return i18nFormatCurrency(value, currency, options);
  },
  formatCompactNumber(value) {
    return i18nFormatCompactNumber(value);
  },
};

i18nInit();
