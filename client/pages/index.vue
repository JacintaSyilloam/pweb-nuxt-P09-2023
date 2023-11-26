<template>
  <main class="bg-neutral-900 pt-16">
    <section class="mx-fluid-x duration-500">
      <bigCard
        imageUrl="https://techcrunch.com/wp-content/uploads/2019/12/Rocket-Lab-Mahia-Peninsula.jpeg?w=1390&crop=1"
        author="Aria Alamalhodaei"
        publishDate="June 23, 2023"
        title="Rocket Lab doubles down on marine booster recovery with next Electron launch"
        description="Rocket Lab's next Electron mission will include another marine recovery attempt of the rocket's booster, the latest step by the company to advance its reusability program."
        category="Space"
      />

      <div class="flex flex-col gap-5 pb-fluid-gap-section">
        <!-- Header -->
        <div class="flex flex-row items-center justify-between">
          <h1
            class="font-roboto text-fluid-landingPage-header font-semibold leading-none text-neutral-200"
          >
            Latest News
          </h1>
          <div class="flex cursor-pointer flex-row items-center gap-2">
            <h2
              class="text-fluid-header-title font-roboto font-semibold leading-tight text-green-500"
            >
              <NuxtLink to="/blog">See all</NuxtLink>
            </h2>
            <font-awesome-icon
              icon="fa-solid fa-arrow-right"
              class="text-fluid-header-title font-semibold leading-tight text-green-500"
            />
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
        >
          <smallCard
            imageUrl="https://techcrunch.com/wp-content/uploads/2023/06/pi-inflection.jpg?w=1390&crop=1"
            author="Devin Coldewey"
            publishDate="June 23, 2023"
            title="Inflection debuts its own foundation AI model to rival Google and OpenAI LLMs"
            description="Inflection, a well-funded AI startup aiming to create “personal AI for everyone,” has taken the wraps off the large language model powering its Pi conversational agent. It's hard to evaluate the quality of these things in any way, let alone objectively and systematically, but a little competition is a good thing."
          />
          <smallCard
            imageUrl="https://techcrunch.com/wp-content/uploads/2023/06/reddit-logo-broken.jpg?w=1390&crop=1"
            author="Ivan Mehta"
            publishDate="June 22, 2023"
            title="Reddit is battling moderators marking their communities NSFW"
            description="After adopting different forms of protest like exclusively posting John Oliver pictures or changing the topic of the subreddit, moderators have rebelled against the company by marking their subreddits NSFW (Not Safe For Work)."
          />

          <smallCard
            imageUrl="https://techcrunch.com/wp-content/uploads/2023/06/duckduckgo-windows.png?w=1390&crop=1"
            author="Aisha Malik"
            publishDate="June 22, 2023"
            title="DuckDuckGo's Windows browser is now available in open beta"
            description="DuckDuckGo's privacy-focused browser is now available for Windows users. The Windows rollout comes nine months after the browser launched publicaly for Mac users. The Windows browser, which is now in public beta, includes many of the privacy protections featured in the browser's iOS, Mac and Android versions."
          />

          <smallCard
            imageUrl="https://techcrunch.com/wp-content/uploads/2021/03/ransomware-bryce.jpg?w=1390&crop=1"
            author="Carly Page"
            publishDate="June 16, 2023"
            title="US confirms federal agencies hit by MOVEit breach, as hackers list more victims"
            description="The U.S. government has confirmed that multiple federal agencies have fallen victim to cyberattacks exploiting a security vulnerability in a popular file transfer tool."
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { data, error } = useAsyncData(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/blogs");
    const responseData = await response.json();
    const document = responseData.docs;

    document.forEach((document) => console.log(document.title));
  } catch (err) {
    console.error(err);
    throw err;
  }

  return {
    data,
    error,
  };
});
</script>
