---
language: 'en'
layout: '../../../layouts/BlogPost.astro'
title: 'Review of 2022'
description: 'review 2022'
pubDate: '2023/01/03'
---

For my first post, I want to write about a preview of 2022 since it is the year beginning.

I built this blog with Astro, following the trend.

The building process (register domain with Google Domains -> building blog with template -> deploy to Vercel) was completed in almost 3 hours, which was blazingly convenient!

# Reading

Since I focused most on "broadening my technology stack" last year, I read many technology books.

I counted how many I read, and it is over 30.

What I read is here.
![Books I read in 2022](/assets/books_read_in_2022.jpg)

(Including some I am reading now ahead.)

Below, I would like to review some of the books I can recommend from my heart.
(\* Cause almost every book is written in Japanese, I'd skip this section in the English version and only leave some of the links. If someone is rarely curious about them, please use DeepL with the Japanese version.)

### About architecture

- [Fundamentals of Software Architecture: An Engineering Approach](https://a.co/d/1ezwGJT)
- [Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems](https://a.co/d/d8CNc7A)

### About functional programming

- [関数プログラミング実践入門 ─ 簡潔で、正しいコードを書くために](https://gihyo.jp/book/2016/978-4-7741-8390-9)
- [Domain Modeling Made Functional](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/)

### About particular technology stack

- [検索システム ― 実務者のための開発改善ガイドブック](https://www.lambdanote.com/products/ir-system)
- [Web ブラウザセキュリティ ― Web アプリケーションの安全性を支える仕組みを整理する](https://www.lambdanote.com/products/wbs)

### Standards for "Good" books

I chose these books to read without careful consideration (if someone in my company or on Twitter recommended them, I'd read them). So, several books did not touch my heart, and I gave up reading them.

However, there seem to be some standards for "Good" books, so I want to put them into words.

- The book that carefully explains an idea or principle behind the theme new to me is "Good."
  - Thinking about a collection of techniques, it is enough with various articles on the Web because we can get much more new information from them.
  - It is essential to consider: "Can I broaden my knowledge network with this book?"
- Even if it is a bit stretched for the beginning of the reading, it is "Good" with systematic explanation including advanced topic.
  - Actually, all the books I introduced above have many appendices, and I'm willing to deal with them for years.
  - When I read books about a familiar theme to check my comprehension, I would better skim it.

# Work

### What went well

#### Broaden technology stack

- Change in role
  - I came to behave as an architect and an embedded SRE in the current team.
  - Recently, I've been wondering if I should care much about the design of the organization's responsibility boundary and make changes if necessary. But I still need more capability to make achievements here, so I need more study in this field.
- Practice new technology stacks
  - I could practice with various technology stacks first time.
    - Designing GraphQL Client/Server
    - Introducing a full-text search functionality to an application
    - Introducing an OpenTelemetry library to an application
    - Implementing CI/CD workflows using GitHub Actions
    - IaC with Terraform
    - Datadog, Sentry
  - Knowledge about each stack is an off-cause variable. Still, it is much more changing for me about the capability to learn and use new technology smoothly.

#### Invent personal best practices about getting things done

- I came to be able to manage the process of product development: "decide the goal first -> examine on a small scale -> involve others and make goal comes true."
  - Fortunately, I could have a chance to make the decision by myself about the whole process:
    1. Setting the goal and overall plan at the beginning of the quarter and agreeing with the team.
    2. Implementing a Proof-of-Concept version of the solution in a short period to minimize technical uncertainty and create a positive atmosphere for the solution among the team.
    3. Breaking down the plan into tasks and checking the dependencies between them to run them concurrently.
    4. Having time to review regularly in the development process to fix the plan.
  - Although it is typical, the best point to make me feel growth is I can do each step confidently.
- My documentation skill was improved.
  - To make movement writing ADR and PRD, I took the initiative to write them and feel my writing speed has improved obviously.
  - Now, I want to insist that these documents are good at they perform as a protocol to smooth daily communication between team members.

#### Evaluation

- I got double-rank promotions in the mission grade of my current company.
- As a result, I could achieve my objective decided 2 years ago when I formally switched my career to software engineering. It made me self-convinced.

### What did not go well

#### Learning a new programming language

- At work, I wrote TypeScript or Python as usual, so I didn't have enough time to spend learning coding new programming languages in production quality.
- I did at least mimic the Haskell and F# codes in books I read.
  - I became familiar with Monad do notation and computation expressions.
  - But, it is far from production quality.

#### Product management

- I came to be confident about planning a technology road map based on business strategy. Still, I need more power to have an impact on changing the strategy itself.
  - I experienced when I built the product perfectly and achieved the OKR. Still, in the next quarter, there was something significant change in strategy, so what I made became unnecessary.
  - It is ideal for developing a product with enough abstraction to survive in high business uncertainty or building with a product-out way to be a core of the business strategy. But I couldn't make it yet.
- I realize the greatness of people, so-called "Technical Product Managers." Now I think it is crucial to consciously assign a person who can play such a role.

# Resolution for 2023

In the end, I'd like to summarize this year's resolution.

I'm planning to focus on two topics below.

- Make a position in some technology area
  - I think I now have enough range of technology stack to make a starting point, so I want to focus on the depth of knowledge this year.
  - I would not make it zero to read randomly with my curiosity. Still, I want to consciously gain experience reading about spec or some background papers about specific technology areas.
  - Finally, I want to continuously publish some of my unique knowledge or thinking, even little things.
- Recall English
  - I want to change my belongs to a team whose primary language is English and gain experience speaking English in daily work.
  - No matter whether it is an inside or outside document, I'd like to challenge writing in English if there is no limitation in language. So I can lower the bar for writing in English.
    - At first, I will rewrite this post in English. -> This is it!
