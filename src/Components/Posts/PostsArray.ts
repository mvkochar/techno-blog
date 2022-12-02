export type Comment = {
  id: number;
  author: string;
  text: string;
};

type Post = {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  comments?: Comment[];
};

const PostsArray: Post[] = [
  {
    id: 1,
    image: "../images/post1.png",
    title: "Aenean commodo ligula",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
    comments: [
      {
        id: 1,
        author: "Jack Ericson",
        text: "Etiam quis metus lacus. Donec viverra leo lorem, et vulputate justo ultrices vitae. Nullam finibus blandit nunc, in ultricies felis euismod quis. Nam nunc mi, faucibus vitae tristique at, pulvinar non dui. Proin interdum massa sed tristique porta. Aliquam erat volutpat. Aenean lorem ligula, tincidunt nec laoreet eget, scelerisque mollis lectus. Donec quis nulla eget justo iaculis auctor. Aenean pulvinar tortor a metus sollicitudin, nec suscipit ante rutrum."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "Nam feugiat aliquet dui, id bibendum mauris maximus nec. Curabitur sed velit et lacus accumsan posuere nec et enim. Proin id arcu a ipsum vulputate luctus non et nisi. Praesent at ligula sed ante sodales tempus vitae vel elit. Donec sit amet scelerisque quam, sit amet aliquam erat. Nam maximus, neque id lacinia hendrerit, elit lacus lacinia ex, bibendum maximus justo augue vitae ligula. Aenean luctus feugiat arcu eget consequat. Morbi aliquet mattis enim nec lobortis."

      }
    ],
  },
  {
    id: 2,
    image: "../images/post2.png",
    title: "Vivamus venenatis faucibus",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
    comments: [
      {
        id: 1,
        author: "John Makintosh",
        text: "Pellentesque eget ligula gravida, posuere nibh id, vehicula velit. Vivamus semper sem sodales, facilisis ligula cursus, porttitor erat. Mauris id vehicula elit. Donec at lacus sed diam bibendum eleifend eget vel ex. Donec condimentum lacus quis tellus lacinia hendrerit. Donec auctor nec sem vitae iaculis. Maecenas eleifend lorem sit amet ipsum viverra, ac consequat metus dictum. Pellentesque velit nisl, aliquet id vestibulum eu, congue ac magna. Maecenas egestas neque et urna vestibulum, id vestibulum ligula luctus. Etiam elementum lectus enim, eget venenatis dui dapibus id. Etiam id mi nec felis ullamcorper mattis ut ac metus. Aliquam porta fermentum ligula, quis laoreet risus lobortis eu. Pellentesque ex sapien, efficitur in sem eu, convallis mattis ipsum."
      },
      {
        id: 2,
        author: "Phill Levinson",
        text: "Proin consectetur augue nisi, eleifend pellentesque sem tincidunt ac. Donec sit amet nunc nunc. Sed at libero sit amet tortor lacinia euismod. Aliquam molestie tortor quam, a blandit nibh cursus nec. Vestibulum ligula lacus, suscipit sed rutrum in, finibus eget enim. Aenean vitae volutpat leo, sit amet malesuada neque. Praesent congue sapien vitae dapibus rutrum. Cras et molestie metus, in venenatis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed nunc ante. Suspendisse in porta augue, nec rhoncus augue. Nulla vel metus et justo faucibus facilisis. Aliquam rutrum dui et faucibus iaculis. Duis in placerat quam."

      }
    ],
  },
  {
    id: 3,
    image: "../images/post3.png",
    title: "Suspendisse commodo dignissim",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
    comments: [
      {
        id: 1,
        author: "Leo",
        text: "Integer pretium sit amet neque eu malesuada. Fusce enim purus, vestibulum vitae quam ac, tincidunt consectetur risus. Mauris tristique enim in malesuada viverra. Ut interdum lectus massa, in luctus turpis elementum eget. Sed convallis lacinia arcu, sit amet pretium purus aliquam sit amet. Quisque et lacus ornare, laoreet felis in, convallis leo. Duis sit amet pretium odio. Etiam in quam elit. Maecenas eget quam dolor. Morbi interdum neque hendrerit, ultrices nisl egestas, dictum odio. Nullam lacinia ipsum eu porttitor rutrum. Etiam ornare est vitae erat viverra, pulvinar ullamcorper eros porttitor. Donec in tellus in lorem rutrum imperdiet. Quisque quis urna aliquet, ornare nunc eget, elementum libero."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "Vivamus at ligula placerat, pretium diam at, placerat nunc. Ut a feugiat velit. Phasellus sed hendrerit dui. Donec volutpat ultrices nulla, in egestas libero imperdiet sed. Nam at tellus dignissim, porta dolor quis, congue ipsum. Proin in metus volutpat, sollicitudin arcu sed, tristique purus. Nam quam massa, convallis ultrices quam in, consequat laoreet felis. Vivamus porta sem ut eros commodo fermentum. Aliquam sagittis dignissim maximus. Nam maximus porttitor odio, et ornare mauris vehicula eu. Mauris pharetra, ex ut faucibus elementum, enim sem tristique eros, quis posuere quam mauris eget nibh. Vivamus pharetra sem eu imperdiet ullamcorper. Morbi pellentesque massa at enim euismod tempus."

      }
    ],
    
  },
  {
    id: 4,
    image: "../images/post4.png",
    title: "Suspendisse pharetra mauris",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
    comments: [
      {
        id: 1,
        author: "Sergio A.",
        text: "Vestibulum placerat, nibh id commodo eleifend, justo nisl fringilla leo, sit amet viverra urna risus eget nibh. Aliquam dignissim et ante non pharetra. Donec a arcu turpis. Vestibulum interdum dui a imperdiet varius. Fusce volutpat iaculis ex, nec aliquet quam lobortis ac. Morbi nec velit et leo aliquet egestas nec sed magna. Morbi dictum nunc eget dolor venenatis dignissim. Nullam accumsan nec nisi sed ultrices. Fusce vitae lacinia purus. Nullam fermentum nibh purus, eget rutrum leo vehicula eget. Integer rhoncus tincidunt congue. Integer feugiat orci non pellentesque elementum. In hac habitasse platea dictumst."
      },
      {
        id: 2,
        author: "Armen P.",
        text: "Praesent sit amet justo posuere mauris luctus vulputate non nec urna. Donec quis laoreet mauris. Phasellus imperdiet dictum urna quis imperdiet. Duis vestibulum lacus quis faucibus viverra. Nam non sem sit amet quam dapibus finibus. Maecenas iaculis nisl a odio varius, vitae dignissim magna rhoncus. Duis sagittis urna massa, ut pretium leo rutrum vel. Curabitur laoreet eleifend aliquet. Suspendisse potenti. Vestibulum rutrum nisl nec odio aliquet pellentesque. Donec sit amet sapien id lectus congue imperdiet non vel dolor. Phasellus ut ultrices urna. Maecenas tortor purus, euismod ut orci vitae, pretium pharetra velit. Nulla egestas accumsan nibh, sit amet viverra dolor ultrices quis. Maecenas elementum blandit leo cursus tincidunt."

      }
    ],
  },
  {
    id: 5,
    image: "../images/post5.png",
    title: "Duis sapien arcu",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
    comments: [
      {
        id: 1,
        author: "John Makintosh",
        text: "Aenean tristique est vitae luctus ornare. Ut sem eros, euismod blandit rhoncus sed, interdum id libero. Morbi volutpat pulvinar elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac viverra mauris, in porttitor mi. Phasellus vitae ligula ipsum. Vivamus mattis lobortis urna, in vestibulum augue. Praesent sed arcu enim. Curabitur ut erat a nisl sollicitudin aliquet eget eu purus. Etiam auctor volutpat orci, in efficitur lorem mollis id. Ut consequat eu est a placerat. Pellentesque hendrerit consectetur sapien, quis vehicula sapien ornare a. Ut viverra a nibh nec maximus. Proin dapibus bibendum velit non mollis. Praesent consectetur dolor ante, ac mattis justo luctus non. Fusce laoreet rhoncus turpis vel posuere."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "Etiam ornare leo id congue facilisis. Nulla fermentum, tellus a porttitor aliquam, velit velit dignissim ex, sed condimentum turpis mauris in dolor. Nullam id dui sed orci convallis aliquet. Maecenas a est non urna tempus pulvinar et eu odio. Cras aliquet ut erat ac dignissim. Aliquam bibendum at diam quis gravida. Integer est ante, porttitor quis vehicula vitae, ultricies eget augue. Sed viverra malesuada justo auctor consectetur. Integer ultrices pulvinar libero. Pellentesque ut leo eget tortor laoreet mattis ut nec urna. Quisque at scelerisque est. Suspendisse aliquam tristique dolor, nec posuere arcu gravida sed. Integer porttitor nibh nulla, eget scelerisque dui iaculis a. Integer ultricies metus sit amet felis pharetra, et facilisis est facilisis. Donec imperdiet sapien nisl, quis molestie nisl dictum in. Nulla auctor hendrerit nunc, blandit consectetur mi sagittis nec."

      }
    ],
  },
  {
    id: 6,
    image: "../images/post6.png",
    title: "Maecenas id nisi justo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
    comments: [
      {
        id: 1,
        author: "John Makintosh",
        text: "Aliquam at justo ac massa molestie scelerisque. Fusce in sodales arcu, viverra ornare neque. Sed enim dui, auctor eleifend ullamcorper et, condimentum eget nibh. Nulla euismod urna erat, a ultrices sem eleifend in. Sed porttitor velit ac tristique maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec a dignissim odio, vel pulvinar magna. Mauris consectetur eleifend nulla eget efficitur. Sed luctus neque sollicitudin, molestie nibh sed, varius nunc. Proin sodales odio non leo cursus, id dictum dui bibendum. Cras aliquam suscipit ante, ac tempor purus gravida ac. Proin tincidunt felis ultricies eros molestie ornare. Quisque tincidunt eget ex at efficitur. Vestibulum iaculis venenatis dolor at tempor. Ut ut neque eget quam consectetur volutpat congue et eros. Nulla ut nisi non purus laoreet aliquam eget in eros."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "Fusce sollicitudin, urna ac dapibus condimentum, justo metus tempor justo, ac convallis ipsum dui non tortor. Vestibulum ligula metus, congue quis eros sit amet, pharetra vehicula purus. Mauris purus sem, volutpat quis odio eu, fringilla vulputate urna. Sed sed diam non nisi ultrices pharetra ut malesuada ante. Nullam faucibus libero et enim porttitor maximus. Curabitur sodales, orci nec ultricies maximus, mauris urna aliquet justo, nec viverra mi libero in eros. Integer fermentum ex id nisi dictum, id aliquam nulla euismod. Nam malesuada, nunc bibendum euismod sagittis, ex felis pulvinar urna, sit amet aliquam sapien enim eget mi. Pellentesque quam massa, molestie quis facilisis ut, porttitor a arcu. Etiam pellentesque lacus elit, at mollis mauris varius a. Sed sit amet sollicitudin neque, et tristique velit. Suspendisse euismod commodo cursus. Fusce sodales magna non luctus vehicula. Vestibulum eu interdum diam."

      }
    ],
  },
  {
    id: 7,
    image: "../images/post1.png",
    title: "Nullam vitae fringilla",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "mobile news",
    comments: [
      {
        id: 1,
        author: "John Makintosh",
        text: "Praesent interdum hendrerit lectus, id posuere mauris aliquet eget. Sed bibendum lectus a turpis tempor, eget congue nibh porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam fermentum magna tortor, sit amet mollis magna aliquam in. Nunc egestas, diam id suscipit convallis, mi ligula ullamcorper turpis, a sollicitudin ante nibh vel dolor. Mauris aliquam nibh consectetur facilisis tincidunt. Pellentesque tempus rhoncus suscipit. Vestibulum ultricies neque odio, nec ornare felis ullamcorper et. Ut bibendum, nunc quis viverra mollis, ipsum quam luctus libero, sit amet vestibulum nisl quam quis eros. Maecenas nec nisi faucibus, posuere arcu et, sodales urna. Nunc efficitur neque in lobortis egestas. Donec dapibus rhoncus blandit. Sed malesuada eget ligula vitae aliquam. Duis ac mauris suscipit, condimentum neque vitae, ultrices leo. Quisque dictum id massa et fermentum. Mauris gravida orci ut."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "Praesent eget lobortis justo. Nam ut feugiat velit. Duis faucibus rhoncus turpis eget iaculis. Nunc sed nisl eget leo auctor convallis. Praesent vitae mollis libero. Nullam volutpat tincidunt mi, vel efficitur lectus. Duis convallis consequat eros, nec cursus dui. Nulla mi odio, pretium ac ullamcorper suscipit, interdum ac purus. Ut sed metus eu ipsum suscipit hendrerit. Nulla facilisi. Ut feugiat mollis ante, sed pulvinar nisl efficitur eget. Aliquam erat volutpat. In hac habitasse platea dictumst. Donec ut gravida metus. Cras vitae laoreet tellus. Duis scelerisque arcu sed urna auctor consequat in a ipsum. Aenean nec lorem vel ligula convallis faucibus ut sit amet sem. Nulla sit amet tempus purus. Nulla viverra eget urna id venenatis. Quisque sit amet molestie metus. Integer sed mollis diam. Proin pellentesque interdum facilisis. Fusce efficitur elementum ultrices. Proin magna dui, lacinia vel orci."

      }
    ],
  },
  {
    id: 8,
    image: "../images/post2.png",
    title: "Sed et nunc sed nunc",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "transport news",
    comments: [
      {
        id: 1,
        author: "John Makintosh",
        text: "Nam gravida turpis ex, eget dictum massa semper ut. In tincidunt libero id lacus laoreet, et suscipit elit ullamcorper. Maecenas tempus enim eros, ut congue nisi suscipit dictum. Duis eu imperdiet tellus. Vestibulum luctus urna odio, sed facilisis lectus facilisis vel. Ut dolor lorem, ullamcorper a convallis non, imperdiet sed purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec imperdiet tortor. Pellentesque vel nunc ex. Sed interdum erat sed quam maximus sodales. Maecenas dictum, lorem sed finibus auctor, tellus ipsum tincidunt dui, quis posuere ligula ante ut lacus. Nulla suscipit aliquam nulla sed finibus. Proin pharetra sollicitudin diam, quis sollicitudin enim sodales vitae. Sed porta sollicitudin dui, vel interdum ante venenatis eu. Phasellus varius vel orci suscipit tempor. Sed aliquet a metus non aliquam. Phasellus vel faucibus risus, id fermentum eros. Suspendisse."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "In hac habitasse platea dictumst. In nec nisl ac neque varius vestibulum sed ut dui. Proin in eleifend nisi. Vivamus faucibus augue odio, sed vestibulum eros aliquet at. Pellentesque ac porttitor tellus, vitae tempus mauris. Aenean iaculis leo sed mi tincidunt, eget tincidunt ante lacinia. Donec aliquet elit elit, ut pellentesque lectus imperdiet sed. Curabitur ac lobortis nunc. Cras consequat eros vitae lectus placerat mollis. Quisque ut risus facilisis, interdum sapien at, porttitor est. Fusce gravida, ex at pharetra iaculis, risus sem ultricies nisi, euismod malesuada dolor tellus id lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a urna scelerisque, consectetur lacus eget, posuere quam. Morbi eu massa lobortis velit vestibulum sagittis vel et nisi.Phasellus eros ligula, venenatis vel quam vitae, posuere vestibulum mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."

      }
    ],
  },
  {
    id: 9,
    image: "../images/post3.png",
    title: "Integer id diam odio",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenea",
    category: "global news",
    comments: [
      {
        id: 1,
        author: "John Makintosh",
        text: "Curabitur lobortis dui id dui pellentesque convallis. Curabitur tincidunt sollicitudin tristique. Duis sed efficitur nibh, ac suscipit nunc. Aenean porttitor, lectus sed convallis ornare, sapien erat dictum magna, at rhoncus est sem a velit. Curabitur vulputate lacus a diam dapibus fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris vel lacus nec nisl tristique placerat ac tincidunt ex. Nunc lacinia porta dictum. Nulla sed vehicula lorem, ac cursus metus. Morbi facilisis, augue eget hendrerit ultrices, est lectus consectetur felis, a ultrices ipsum orci quis ligula. Fusce sodales mollis nulla, sed ultrices elit venenatis a. In non orci interdum sem ultricies fermentum eget vitae massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tempus lorem tortor, ut euismod ante euismod non. Nam a nisi a metus eleifend."
      },
      {
        id: 2,
        author: "Phill Morisson",
        text: "Aliquam laoreet ultrices dui, eget mattis neque consequat vitae. Nunc sed molestie enim, nec bibendum dui. Nullam finibus odio non egestas auctor. Donec at tristique eros. Praesent ac nibh semper elit aliquam lobortis. Donec sit amet pharetra metus. Fusce pellentesque dignissim dolor vel consequat. Nunc suscipit, nulla vitae pharetra accumsan, tortor velit finibus erat, non condimentum purus libero et mauris. Donec egestas hendrerit lorem, in egestas risus placerat non. Nunc rhoncus sollicitudin sapien, eu semper velit molestie sit amet. Proin varius enim quis mauris efficitur, dictum rhoncus felis tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ultrices mi ut enim iaculis, id scelerisque elit malesuada. In id hendrerit arcu, vitae mollis mi. Quisque risus lorem, viverra sed felis a, interdum viverra ligula. Morbi sed elit vestibulum, placerat risus non, consectetur magna. Etiam iaculis, ante."

      }
    ],
  },
];

export default PostsArray;
