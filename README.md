# KasiQuote

## The problem

Gardeners, cleaners, home helpers, and other part-time or independent workers in Africa often agree on prices in person or over WhatsApp. It’s easy to overlook expenses like materials and taxi fare when deciding what to charge. Writing a clear quote can also take time, especially when English is an additional language. When payments and expenses are scattered across messages, it’s hard to know what customers paid, what the work cost, and how much you took home.

KasiQuote helps workers price a job and prepare a plain-English quote they can send on WhatsApp. It also helps them manage their finances by showing how much customers paid each month, how much they spent on jobs, and what they actually took home. That gives them a clearer picture of what they have available to spend or save. The programme can be used offline in case they are in an area with no signal. 

## How to run it

Open [KasiQuote](https://perilium.github.io/kasiquote/) in your phone’s browser. The app has three tabs: **Quote**, **Jobs**, and **Earnings**.

### 1. Quote — choose a price and copy the message

Enter the job name, estimated hours, your hourly rate, and any materials, transport, or other costs.

- **Quote for hours only** multiplies the estimated hours by your hourly rate. It shows what you’d keep after costs. If you’d lose money, it shows the loss and the minimum hourly rate needed to make a profit at those hours.
- **Suggested quote** adds your job costs to the hours-only price, so you can keep the amount you intended to earn for the hours worked.

Tap **Use [price] quote** to save the job at the chosen price. Tap **Copy WhatsApp message**, paste it into your customer’s chat, and send it. The message uses the price you chose.

### 2. Jobs — track the job through to payment

Tap **Mark accepted** when the customer agrees. Tap **Mark completed** when you finish the work. When the customer pays, tap **Record payment**, enter the amount received and payment date, then tap **Save payment**. The saved payment is automatically added to **Earnings** and appears on the graph based on the date you were paid.

### 3. Earnings — see what you took home

The graph shows **payments received**. The summary shows **payments received**, **job costs**, and **take-home earnings** after those costs. Switch between **This month**, **Last month**, and **Last week**.

For work you arranged outside KasiQuote, tap **Add income** and enter the amount received, payment date, and any job costs. Once saved, that payment appears on the same graph as payments from quoted jobs.

## How we kept Copilot token usage low

- We gave Copilot a focused brief with the exact screens, calculations, and expected results.
- We limited follow-up prompts to specific fixes in the existing app.
- We used plain HTML, CSS, and JavaScript and checked the main workflow ourselves.
