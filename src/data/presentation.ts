type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "docmalitt@docmalitt.eu.org",
  title: "Hi, I’m Dokk or docmalitt or ... haven't decided yet 👋",
  // profile: "/profile.webp",
  description:
    "I'm trying to build a homelab, home network with various selfhosting goodies, preferably Open Source stuff because I like the thing. I support the thing. However, I do not consider myself to be a radicalized Linux nutter. Ok, maybe a little.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/docmalitt",
    },
    {
      label: "GitLab",
      link: "https://gitlab.com/docmalitt",
    },
    {
      label: "Github",
      link: "https://github.com/docmalitt",
    },
  ],
};

export default presentation;
