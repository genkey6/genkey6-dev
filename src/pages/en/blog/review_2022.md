---
language: 'en'
layout: '../../../layouts/BlogPost.astro'
title: 'Review of 2022'
description: 'review 2022'
pubDate: '2023/01/03'
---

For my first post, I want to write about preview of 2022 since it is year beginning.

I built this blog with Astro following the trend.

Whole building process (register domain with Google Domains -> building blog with template -> deploy to Vercel) completed in almost 3 hours, and that was blazingly convenient!

# Reading

Since I focused most on "broaden my technology stack" last year, I read many of technology books.

I roughly counted how many I read, and it seems to be over 30.

What I read is here.
![Books I read in 2022](/assets/books_read_in_2022.jpg)

(Including some I reading now ahead.)

Bellow, I would like to review some of the books which I can recommend from my heart.
(\* Cause almost every books are written in Japanese, I'd skip this section in English version and only left some of links. If someone rarely has curiosity about them, plz use DeepL with Japanese version.)

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

I chose these books to read without careful consideration (if someone in my company or in Twitter recommended, I'd read it), to be honest there were several books did not touch my heart or I gave up to read them.

However, there seems to be some standards for "Good" books to me, so I want to put it into words.

- The books which carefully explain about an idea or principle behinds the theme which is new to me is "Good".
  - Thinking about collection of techniques, it is enough with various articles in Web, because we can get much more fresh information from them.
  - It is important to think about: "Can I broaden network of knowledge with this book?"
- Even if it is a little bit stretch for beginning of reading, it is "Good" with systematic explanation including advanced topic.
  - Actually, all of books I introduced above has lots of appendix, and I'm willing to deal with them for years.
  - When I read books talking about theme which I am familiar with to check my comprehension, I would better to skimming it.

# Work

### What went well

#### Broaden technology stack

- Change in role
  - I came to behave myself as an architect and an embedded SRE in current team.
  - Recently I'm wondering if I should become to take care much about the design of organization responsibility boundary and make change in it if necessarily. But I cannot make any achievement here yet, so I think I need more study in this field.
- Practice of new technology stacks
  - I could have some chance to practice with various technology stacks including which is completely new to me.
    - Designing GraphQL Client/Server
    - Introducing a full text search functionality to an application
    - Introducing an OpenTelemetry library to an application
    - Implementing CI/CD workflows using GitHub Actions
    - IaC with Terraform
    - Datadog, Sentry
  - Knowledge about each stacks is off cause variable, but it is much more changing for me about capability to learn and use new technology in real case smoothly.

#### Make personal best practice about getting things done

- I came to be able to manage the process of product development: "decide the goal first -> examine in small scale -> involving others and make goal comes true".
  - Fortunately, I could have chance to make decision by myself about whole process of:
    1. Setting the goal and overall plan in the beginning of quoter and making agreement with the team.
    2. Implementing Proof-of-Concept version of the solution in short period to minify technical uncertainty and make positive atmosphere to the solution among the team.
    3. Breaking down the plan to tasks and checking the dependencies between them to run them in concurrent.
    4. Having time to review regularly in the development process to fix the plan.
  - Although it seems to be so normal, for me the best point to make me feel growth is I can do each of step above confidently.
- My documentation skill was improved.
  - To make movement writing ADR and PRD, I took the initiative to write them and feel my writing speed has improved obviously.
  - Now I think these documents are good at they perform as a protocol to smooth daily communication between team members.

#### Evaluation

- I got double-rank promotions in mission grade of current compony.
- As a result, I could achieve my objective decided 2 years ago when I formally switched my career to software engineer. It made me self convinced.

### What did not go well

#### Learning new programming language

- In work I wrote TypeScript or Python as usual, so didn't have enough time to spend learning coding new programming languages in production quality.
- What I did at least is mimic the Haskell, F# codes in books I read.
  - I became familiar with Monad do notation, computation expressions.
  - But, it is far from production quality.

#### Product management

- I came to be confident about planning technology road map based on business strategy, but don't have enough power to have impact to change strategy itself.
  - I experienced when I built product perfectly and achieved the OKR, but in next quoter there was something big change in strategy so what I built became unnecessary.
  - I understand it is ideal if we can develop a product with enough abstraction to survive in high business uncertainty or build with product-out way to be a core of business strategy. But I couldn't make it yet.
- I realize the greatness of people so called "Technical Product Manager", and now I think it is important to consciously assign a person who can play such role.

# Resolution for 2023

In the end, I'd like to summarize this year's resolution.

I'm planning to focus on two topics bellow.

- Make position in some technology area
  - I think now I have enough range of technology stack to make a starting point, so I want to focus on the depth of knowledge this year.
  - I would not make it zero to read at random with my curiosity, but I want to consciously gain experience reading deeply about spec or some background papers about specific technology area.
  - Finally, I want to become continuously publishing some of my unique knowledge or thinking even if it is little things.
- Recall English
  - I want to change my belongs to a team whose main language is English, and gain experience to speak English in daily work.
  - No matter it is inside or outside document, I'd like to challenge writing in English if there is no limitation in language. So I can lower the bar for writing in English.
    - At first, I will rewrite this post in English. -> This is it!
