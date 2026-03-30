<div align="center">


<h1>AetherSwap</h1>

<p><strong>An automated Steam balance helper with a zero-code web console</strong><br>Cross-region buying · market analysis · historical review · visual dashboard</p>

[![Version](https://img.shields.io/badge/version-v0.1.0--beta-orange)](https://github.com)
[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux-lightgrey?logo=linux)](https://github.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com)

<p>
  <a href="./README.md">简体中文</a> ·
  <a href="#core-features">Core features</a> ·
  <a href="#quick-start">Quick start</a> ·
  <a href="#how-it-works">How it works</a> ·
  <a href="#advanced-configuration">Advanced configuration</a> ·
  <a href="#faq">FAQ</a> ·
  <a href="#contributing">Contributing</a> ·
  <a href="#disclaimer">Disclaimer</a>
</p>

<br>

<img src="./web/assets/hero_banner.png" width="800" alt="AetherSwap console preview">
<br><br>

> AetherSwap is built to handle item selection, ordering, listing, and confirmation with very little manual work.  
> Every trade is recorded, so costs, proceeds, discount rates, and profit or loss stay visible.  
> Item selection and pricing rely on data such as coefficient of variation (CV) and trend fit (R^2), not guesswork.

</div>

> [!NOTE]
> **What this project is for**
> AetherSwap lowers the barrier for newcomers and saves time for people who already know the workflow.
> It is not a dedicated arbitrage bot, and it does not guarantee risk-free cheap Steam balance. After the 7-day trade hold, item prices often move toward the balance price you expected, but that is not guaranteed. The realized discount can improve or get worse by the time the hold ends.
> If your goal is to get Steam balance quickly, this tool is probably not a good fit.

---

## Core features

### Web dashboard

You do not need to live in terminal windows or JSON files. AetherSwap ships with a responsive web dashboard for runtime status, market views, and settings. Most day-to-day configuration happens in the UI.

<div align="center">
  <img src="./images/2.png" width="700" alt="Web dashboard home page">
  <br>
  <sup>Dashboard home page</sup>
</div>

### Mostly automated balance workflow

The main flow covers **item selection -> order placement -> inventory intake -> listing -> Steam Guard confirmation** with very little manual babysitting. Playwright handles Steam login and cookie extraction. If you configure the mobile token secret (`identity_secret`), listing confirmations can be signed automatically as well.

### Data-driven item selection and pricing

This project leans on data instead of gut feel:
- **Coefficient of variation (CV)** quantifies price volatility and filters out items that swing too hard.
- **Trend fit (R^2)** checks how cleanly the historical price line fits a trend and helps avoid items that are falling or behaving erratically.
- **Reference price calculation** uses Steam order book depth and historical trades to pick a practical listing price instead of blindly undercutting to the lowest listing.

### Real-time market tracking

The dashboard tracks both your current item discount state and broader market movement in real time, which makes timing decisions easier when the market is shifting.

<div align="center">
  <img src="./images/5.png" width="700" alt="Real-time market tracking view">
  <br>
  <sup>Discount tracking and broader market movement</sup>
</div>

### Historical item analysis

You can review long-range price movement, trade volume changes, and profit or loss for a specific item. That makes it easier to look back at earlier trades and adjust the selection strategy with actual history instead of memory.

<div align="center">
  <img src="./images/4.png" width="700" alt="Historical item analysis view">
  <br>
  <sup>Historical price and volume analysis for an item</sup>
</div>

### Steam sale discovery

There is also a Steam store sale helper built in:
- **Live sale collection** pulls the current Steam game discounts in bulk.
- **Multi-factor sorting** lets you sort or filter by discount size, review score, historical low price, and similar signals after you have moved balance back into Steam.

<div align="center">
  <img src="./images/3.png" width="700" alt="Steam sale panel">
  <br>
  <sup>Steam game sale list sorted by discount and review score</sup>
</div>

### Trade and inventory analytics

Every trade is stored permanently: purchase cost, list price, final sale amount, Steam balance received, and overall conversion ratio. The data panel makes it clear where the money went and what each workflow actually returned.

<div align="center">
  <img src="./images/1.png" width="700" alt="Trade analytics dashboard">
  <br>
  <sup>Profit and loss charts with balance conversion summaries</sup>
</div>

---

### Other built-in features

| Module | Description |
|---|---|
| Steam token tools | Built-in Steam Guard token generation and management. After you extract the token secret, you can generate 2FA codes directly in the console instead of reaching for your phone every time. |
| Proxy pool | Supports both long-lived static proxies and Webshare rotating IPs to deal with region restrictions and reduce the risk of community locks from repeated requests on one IP. |
| Web console | Visual configuration and runtime monitoring in one place, with no extra frontend build step. |
| Embedded Steam login | Enter account credentials in the panel and let the app handle login and cookie extraction. No manual packet capture needed. |
| Notifications | PushPlus WeChat notifications and email alerts for important events. |
| Factory reset | Clears proxies, tokens, database, logs, and other local private data in one step. |

---

## Quick start

### Requirements

- **Python**: 3.10 or newer ([download](https://www.python.org/downloads/))
- **Operating system**: Windows 10/11 is recommended, or Linux with a desktop environment
- **Network**: the machine must be able to reach the Steam community normally

> [!IMPORTANT]
> **For users in mainland China:** turn on a Steam accelerator before running the app, such as [Steam++ / Watt Toolkit](https://steampp.net/). Without it, Steam community requests may fail, login can break, and market data requests may time out.

### Installation

**Step 1: clone the project**

```bash
git clone https://github.com/VexedWilosn/AetherSwap.git
cd AetherSwap
```

**Step 2: install dependencies**

```bash
# Install Python dependencies. The mirror below is commonly used by users in mainland China.
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# Install the bundled browser used for automated Steam login.
python -m playwright install chromium
```

**Step 3: launch the app**

```bash
python run.py
```

The web console opens automatically after startup. Follow the "快速开始" card on the home page to finish the initial setup.

### Docker deployment

If you are deploying on a server, Docker is the easier route. You do not need to install Python locally.

**Docker Compose**

```bash
git clone https://github.com/VexedWilosn/AetherSwap.git
cd AetherSwap
docker compose up -d
```

**Manual build and run**

```bash
docker build -t aetherswap .
docker run -d \
  --name aetherswap \
  -p 28472:28472 \
  -v aether-config:/app/config \
  --restart unless-stopped \
  aetherswap
```

After the container starts, open `http://<server-ip>:28472` in a browser.

> [!TIP]
> **Persistent data:** the `config/` directory is mounted through a Docker volume, so credentials, the database, and settings survive container rebuilds.
>
> **Environment variables:** you can override the listening address with `AETHER_HOST` (default `0.0.0.0`) and `AETHER_PORT` (default `28472`).

> [!TIP]
> **Buff login in Docker:** you do not need a display attached to the container. Click "获取登录二维码" in the web console, and the app will start a headless browser in the background, capture the Buff QR code, and show it on the page. Scan it with the mobile app to complete login. Cookies are saved automatically after login succeeds.

### First-run flow

```text
Open the console -> enter the token secrets -> add and verify a Steam account -> start the automation
```

1. Open the "快速开始" checklist on the home page and work through it item by item.
2. In "系统设置", fill in `shared_secret`, `identity_secret`, and your notification token.
3. In "账号管理", add a Steam account and click "验证" to run the simulated login flow.
4. Return to the home page and click "启动任务" when you are ready to start.

---

## How it works

AetherSwap runs two background pipelines that work together.

### Buying pipeline

```text
iflow market API -> discount filtering -> stability analysis (CV/R^2) -> safety checks -> Buff auto ordering
```

1. **Real-time item selection:** the app pulls a list of items with the best combined discount from the iflow API.
2. **Stability filtering:** it fetches Steam price history, computes `CV` and `R^2`, and drops items that look too volatile.
3. **Safe ordering:** it checks guardrails such as daily limits and minimum discounts before creating the order on Buff.

> **Payment note:** the current version only supports **WeChat Pay** for checkout. More payment methods, including Alipay, are planned but not shipped yet.

### Selling and data pipeline

```text
inventory watcher -> Steam order book depth -> automatic listing -> token-signed confirmation -> trade data stored
```

1. **Inventory watcher:** detects new items entering the Steam inventory and triggers listing automatically.
2. **Automatic confirmation:** uses `identity_secret` to sign the second Steam confirmation step for a new market listing.
3. **Trade history:** stores each finished trade permanently and computes the effective balance loss for each transaction.

---

## Advanced configuration

All settings can be changed live in "系统设置". Changes take effect immediately and do not require a restart.

### Common parameters

| Parameter | Default | Description |
|---|---|---|
| `stability.days` | `30` | Number of days of price history used for analysis. More days usually means a steadier signal. |
| `stability.cv_threshold` | `0.05` | Upper bound for volatility. Raising it allows more items through, with more risk. |
| `stability.r2_threshold` | `0.7` | Lower bound for trend fit. Lowering it accepts noisier price behavior. |
| `pipeline.max_daily_buy` | - | Daily purchase cap for bankroll control. |
| `pipeline.sell_strategy` | `immediate` | Listing strategy: `immediate` (list right away) / `trend` (delay based on trend) / `hold` (do not sell below cost). |
| `proxy_pool` | - | Custom proxy list. Leave it blank to use the built-in Webshare rotation. |

> **Conservative defaults:** the shipped defaults are intentionally cautious. If you want more buying opportunities, try raising `cv_threshold` to `0.08` and lowering `r2_threshold` slightly.

### Email-based payment confirmation

The order confirmation step after payment works in one of two modes, depending on whether IMAP email settings are configured in "系统设置".

- **Automated mode:** after the payment link is generated and you complete the payment, the trading platform usually sends a confirmation email. AetherSwap watches the inbox through IMAP and, once it spots the payment-success message, continues automatically into the next steps such as claiming the item, closing out the order, and reminding the seller to deliver.
- **Manual fallback:** if `email_user` or `email_pass` is left blank, the program does **not** crash. It falls back to manual confirmation mode. The page and logs enter a countdown state, and you need to click the manual confirmation in the UI within 5 minutes, which is the default `email_timeout_seconds=300`. If the payment is complete but the system does not receive confirmation within that window, the order is treated as timed out and the item is skipped.

> **Suggestion:** if you want the smoothest hands-off flow, set up a dedicated mailbox for payment notifications with IMAP enabled.

---

## Project structure

```text
AetherSwap/
├── app/                   # FastAPI backend core
│   ├── main.py            # App entry point and route registration
│   ├── pipeline_steps.py  # Buying and selling pipeline logic
│   ├── database.py        # SQLModel ORM and database operations
│   └── services/          # Background queues and schedulers
├── buff/                  # Buff platform integrations
├── steam/                 # Steam APIs and Playwright automation
├── iflow/                 # iflow market data integration
├── utils/                 # Shared utilities: proxies, notifications, config, and more
├── web/                   # Static frontend assets (HTML / JS / CSS)
├── tests/                 # Unit tests
├── run.py                 # One-click launcher for desktop mode
├── Dockerfile             # Multi-stage Docker build
├── docker-compose.yml     # Docker Compose setup
├── docker-entrypoint.sh   # Container startup script
└── requirements.txt       # Python dependencies
```

---

## Running tests

```bash
# Run the full test suite
pytest tests/ -v

# Run a specific module
pytest tests/test_pipeline_steps.py -v
```

---

## FAQ

<details>
<summary><b>Q: The launcher window does not open after startup. What should I check?</b></summary>

Make sure dependency installation finished without errors. If the issue is a port conflict, change the `28472` port in `app/main.py` to an unused port and start the app again.

</details>

<details>
<summary><b>Q: Steam account login fails or cookies are not extracted. What should I check?</b></summary>

Make sure the current network path, including your accelerator if you use one, can reach the Steam community. If automated login keeps failing, you can manually paste browser cookies into "账号管理" as a fallback.

</details>

<details>
<summary><b>Q: The system keeps saying it skipped a purchase because of volatility or slope. Is that expected?</b></summary>

Yes. That is the conservative default behavior. If you want more trades, raise `cv_threshold` to around `0.08` and lower `r2_threshold` to around `0.6`, but understand the extra risk before doing that.

</details>

<details>
<summary><b>Q: How should I deploy this on a Linux server?</b></summary>

**Recommended:** use Docker.

```bash
docker compose up -d
```

**Manual deployment** requires Python 3.10 or newer:

```bash
python -m uvicorn app.api:app --host 0.0.0.0 --port 28472
```

Then open the server IP in an external browser. Set up an Nginx reverse proxy and access control before exposing the panel to the public internet.

</details>

<details>
<summary><b>Q: What do I do when the Buff cookie expires?</b></summary>

The app opens the re-login dialog automatically. Click "获取登录二维码", wait for the QR code on the page to refresh every 3 seconds, and scan it with the Buff mobile app. The system detects a successful login and saves the cookie automatically. This flow works both in Docker and in desktop mode.

</details>

---

## Contributing

Contributions of any size are welcome. The usual flow is:

1. Fork the repository.
2. Create a feature branch from `main`: `git checkout -b feature/my-awesome-feature`
3. Commit your changes: `git commit -m 'feat: add some awesome feature'`
4. Push the branch: `git push origin feature/my-awesome-feature`
5. Open a pull request.

If you are reporting a bug or proposing a feature, include complete logs when you can.

---

## Community and contact

If you already have practical experience with Steam balance flipping, testing feedback and parameter-tuning advice are especially useful here.

> **WeChat:** `13738064065`  
> Add a note that says `AetherSwap` when sending the friend request.

---

## Roadmap

> Planned work. Issues and pull requests are welcome.

- [ ] More trading platforms
  - [ ] C5Game integration
  - [ ] IGXE integration
  - [ ] Youyou Youpin integration
- [ ] More payment methods
  - [x] WeChat Pay
  - [ ] Alipay
- [ ] Mobile and responsive UI support
- [x] One-command Docker deployment
- [ ] Multi-account concurrent scheduling

---

## Developer notes

- **Backend stack:** `Python 3.10+` · `FastAPI` · `SQLModel (SQLite)` · `Playwright`
- **Frontend stack:** plain `HTML / JS / CSS`
- **Concurrency model:** async tasks combined with a multi-threaded background queue in `app/services/workers`
- **Extensibility:** the codebase is modular enough that adding more platforms such as C5 or IGXE mainly means writing another API wrapper layer

---

## Disclaimer

> Please read this disclaimer before using, cloning, or downloading the project. Any use of the project, including downloading, installing, running, modifying, or redistributing the code, is treated as acceptance of the terms below. If you do not agree, stop using the project and remove your local copies.

1. **Learning and research only:** this project is fully open source and free to use. It exists for learning, discussion, and technical validation around Python automation, data collection, full-stack architecture, and mathematical models. It does not ship infrastructure intended for attacking, breaking, or maliciously abusing third-party platforms. Do **not** use this project, or any derivative of it, for illegal activity, platform abuse, or any commercial gray-market operation that violates the user agreements or terms of service of platforms such as Steam or Buff. You are solely responsible for any legal consequences caused by misuse.
2. **Account risk and bans:** Steam and related item-trading platforms have strict risk controls for scripted automation, API abuse, and large-scale machine activity. Using this project in live trading can lead to account warnings, API bans, or permanent asset freezes. Understand that risk before using it. Use isolation measures when appropriate, such as dedicated proxies and conservative request frequency. The project, the maintainer, and contributors are not liable for restrictions, bans, asset loss, or related damages.
3. **Market volatility and financial loss:** virtual item markets are volatile. Platform rule changes, game updates, currency movement, and other outside factors can all hit pricing hard. Any built-in analytics, including CV, `R^2`, and other historical models, are for technical analysis and display only. They are not investment advice, purchase advice, or financial advice. Network latency, API failures, model error, and unpredictable market events can all cause losses. Any direct or indirect financial loss remains the responsibility of the user.
4. **Data privacy and security:** the project runs locally and may store sensitive information on your machine, including account cookies, the mobile token identity secret (`identity_secret`), and payment-related parameters. You are responsible for protecting that data. The developer is not responsible for privacy leaks or property loss caused by poor local handling, malware, proxy leakage, or server compromise.
5. **No commercial resale or abuse:** this project is distributed for free under an open source license. Without explicit written permission from the original author, no individual, studio, or organization may sell the project, sell derivative builds, sell repackaged binaries, charge for managed operation services, bundle it into paid knowledge products, or profit from it in similar ways. The developer reserves the right to pursue infringement and unfair-competition claims where applicable.
6. **Request frequency limits and DDoS risk:** the project intentionally includes conservative request-rate limits to reduce abuse and platform risk. If you remove delay protections, run large proxy pools with high concurrency, or otherwise generate traffic that is treated as malicious crawling or a DDoS attack, all legal responsibility and platform consequences remain with the user.

**Final statement:** this project is provided "as is", with no express or implied warranty. The developer makes no promise about accuracy, reliability, or fitness for any particular purpose. You are fully responsible for the results of using it.

---

<div align="center">

If AetherSwap is useful to you, consider starring the repository.

Made for the Steam community

</div>
