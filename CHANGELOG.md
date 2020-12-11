### 1.0.4 (2020-12-11)

### 1.0.3 (2020-12-11)

### 1.0.2 (2020-12-09)

# 1.0.0

### ⚠ BREAKING CHANGES
* **client:** References to modules need to be tweaked (`joodle.core.user.getUsers()` now
becomes `joodle.modules.core.user.getUsers()`).
### Features
* **auth.email:** added response typings to getSignUpSettings() ([9c47b9e](https://github.com/lukecarr/joodle/commit/9c47b9e2eaba02c95a85819adc9857eda6086b78))
* **client:** exposed method for making raw function requests ([f8912ed](https://github.com/lukecarr/joodle/commit/f8912ed4f66448e2eb3b54993fbf4f9dbd8eec57))
* **client:** exposed several HTTP options for configuration ([81e8219](https://github.com/lukecarr/joodle/commit/81e8219099944e1ffab281dc11f419349b869e73))
* **client:** support for HTTP caching ([e2ad0c9](https://github.com/lukecarr/joodle/commit/e2ad0c94e553061bd74044eaf1f1b2386f05b5dc))
* **modules:** added auth_email_signup_user function ([3f3153b](https://github.com/lukecarr/joodle/commit/3f3153b8ef48208e7b4a8c2136e72806b4ebfb92))
* **modules:** added core_user_agree_site_policy function ([d370a3a](https://github.com/lukecarr/joodle/commit/d370a3a8a20a411d2da41d0f2a8745abf7474a3c))
* **modules:** added core_user_create_users function ([9abbbe5](https://github.com/lukecarr/joodle/commit/9abbbe5546226c43243a879b06553a0f9ba31da6))
* **modules:** added core_user_delete_users function ([b36a1ab](https://github.com/lukecarr/joodle/commit/b36a1ab012592d4a6652f3d1bc4928f520b9c56e))
* **modules:** added core_user_get_course_user_profiles function ([d61b75c](https://github.com/lukecarr/joodle/commit/d61b75c888b08cb463ba787d921ec184b0e90630))
* **modules:** added core_user_get_private_files_info function ([b4aee89](https://github.com/lukecarr/joodle/commit/b4aee890155841763ccd67a9cdd1048fc4356eeb))
* **modules:** added core_user_get_user_preferences function ([4682a11](https://github.com/lukecarr/joodle/commit/4682a11547fe3174f3b732bab50a4e518d7465e5))
* **modules:** added core_user_set_user_preferences function ([2f7f08a](https://github.com/lukecarr/joodle/commit/2f7f08a7f993df70106fd431dddbf412f95257d1))
* **modules:** added core_user_update_picture function (and delete) ([458f0a5](https://github.com/lukecarr/joodle/commit/458f0a5bec3a13d8d227bd070754ac6a68a1d7da))
* **modules:** added fields to auth_email_get_signup_settings response ([8a02d2b](https://github.com/lukecarr/joodle/commit/8a02d2b190b6c0c5b6404b54b9fd63917c5828af))
* **modules:** added getHttpResponse() to get raw HTTP response ([0d9acfd](https://github.com/lukecarr/joodle/commit/0d9acfd21216ca99766c38f877e2a250c96a8200))
* **modules:** added gradereport_user_get_grade_items function ([b24cb85](https://github.com/lukecarr/joodle/commit/b24cb8557631595102e7fb37a9518dbd23401d14))
* **modules:** added roles module (w/ assign and unassign functions) ([336719e](https://github.com/lukecarr/joodle/commit/336719e1a1d7948b556f6f7b9e795ef846ed03e5))
* **modules:** started work on core.user module ([a8299eb](https://github.com/lukecarr/joodle/commit/a8299eb5b8ded5a550d21c2b9b7911bda061c214))
* client options can now be provided through environment variables ([d8e1678](https://github.com/lukecarr/joodle/commit/d8e16786dc0340d8b37f8a6c983f14c595e5bc72))
* **webservice:** started work on webservice module (with site info) ([dc7063e](https://github.com/lukecarr/joodle/commit/dc7063e4554978ce90de51fef7f02c0599a2a222))
* initial release ([af804fa](https://github.com/lukecarr/joodle/commit/af804fa7031fb170133d353979573b93e6307fcb))

### Bug Fixes
* **got:** deprecation issue with rejectUnauthorized HTTP option ([4034f76](https://github.com/lukecarr/joodle/commit/4034f76821f59337b44114eadb05f00de2513eac))
* **modules:** getUsers and getUsersByField allowed invalid fields ([f0af27f](https://github.com/lukecarr/joodle/commit/f0af27fc577ca6d9e47bc7c63eb4e9f59bde7c27))
* changed from export default to export in main file ([4f40240](https://github.com/lukecarr/joodle/commit/4f40240677ef222174c311d1136aca6a9b31bf97))
* **babel:** missing @babel/runtime dependency ([9c9c5e9](https://github.com/lukecarr/joodle/commit/9c9c5e91cff9753c67ab2fb825232664fdfa88e0))

### Performance Improvements
* **npm:** removed unused NPM dependency ([ae41d83](https://github.com/lukecarr/joodle/commit/ae41d8310e9f7e56aca03f1131ac3e7d24979450))

### Code Refactoring
* **client:** tidied up Joodle class by encapsulating modules ([c9ba591](https://github.com/lukecarr/joodle/commit/c9ba59157bb16c1d3094a0a5ecf4383e9186f829))

# 0.2.3

### Features

- **client:** support for HTTP caching ([3b5c633](https://github.com/lukecarr/joodle/commit/3b5c633ace62f9e1616dbcfaa88bed0fe25ab123))

### Documentation

- **api:** added better JSDoc documentation ([09f5939](https://github.com/lukecarr/joodle/commit/09f5939ee5e1d904259481d6611ed3b66ceade7a))
- added changelog to documentation site ([dc27457](https://github.com/lukecarr/joodle/commit/dc27457d37e0c00a1d6736e33f21407311a15d76))

# 0.2.2

### Features

- **modules:** added gradereport_user_get_grade_items function ([bb0396f](https://github.com/lukecarr/joodle/commit/bb0396f82e1295adcab8135d641dda5551e5eb43))

### Build

- **npm:** excluded documentation source from NPM packaging ([5086143](https://github.com/lukecarr/joodle/commit/5086143f9caa3ae3e9e2ef7107e72adef4002059))
- migrated from NPM to Yarn ([b8b842d](https://github.com/lukecarr/joodle/commit/b8b842dddd4e03bef9032dff41f6d1dab8816eab))
- **npm:** added documentation back into NPM package ([140f86b](https://github.com/lukecarr/joodle/commit/140f86bfbcb9cac19756dab5be5367de97e9a45f))
- **npm:** fixed typo in build script ([04de6da](https://github.com/lukecarr/joodle/commit/04de6dacaacf17bc577c0f296f6de5e933b09c3f))

### Style

- **docs:** applied Prettier formatting to documentation homepage ([0b365eb](https://github.com/lukecarr/joodle/commit/0b365ebd9f3d7de11c8b93eb2fe7432a0d80485f))
- **tests:** applied ESLint formatting to unit tests ([04439da](https://github.com/lukecarr/joodle/commit/04439dab9c6a28e8e1e4efb5ac87add1cfb4b9c4))

### Refactors

- **yarn:** rearranged Yarn scripts ([13be2a1](https://github.com/lukecarr/joodle/commit/13be2a1cbe2d56e4de26605e49deb7d512bf8a05))
- **modules:** moved module class definition ([2594388](https://github.com/lukecarr/joodle/commit/2594388d07d3cbd25434945fe5a7a60853aa82b9))

### Bug Fixes

- **got:** deprecation issue with rejectUnauthorized HTTP option ([ca33cbd](https://github.com/lukecarr/joodle/commit/ca33cbda512598ad06059d5bf104a2d096b065be))

### Documentation

- **api:** added automatic API reference doc generation ([1a44c52](https://github.com/lukecarr/joodle/commit/1a44c522b21d02392dd28a9db23f27f172e48694))

# 0.2.1

### Features

- **modules:** added roles module (w/ assign and unassign functions) ([ae787ea](https://github.com/lukecarr/joodle/commit/ae787ea2817e80f62c24792ad0cf3a6603dd2890))

### Documentation

- **readme:** added code coverage shield ([35a7e19](https://github.com/lukecarr/joodle/commit/35a7e19931615b475155f115820049e5e16dc12d))
- initialised docs with VuePress ([2690b73](https://github.com/lukecarr/joodle/commit/2690b73cca056ec6adc9f1e0f906680b27c5114a))
- added docs (using VuePress) ([0319af3](https://github.com/lukecarr/joodle/commit/0319af3d136ed3e1aa3f0a955d98bc91f5bfee13))

### Refactors

- module-related class properties are now readonly ([efe56d7](https://github.com/lukecarr/joodle/commit/efe56d7f6c1cbec2e63a4692123263fded568706))

# 0.2.0

### Features

- **webservice:** started work on webservice module (with site info) ([8c3d93b](https://github.com/lukecarr/joodle/commit/8c3d93b82b8a4f64ec11d6b2ab08527483059322))
- **modules:** added getHttpResponse() to get raw HTTP response ([b053696](https://github.com/lukecarr/joodle/commit/b0536963b93e3dc958043afd0eb737a8641730df))
- **client:** options can now be provided through environment varaibles ([492459a](https://github.com/lukecarr/joodle/commit/492459aa1682a31625825a5d5727bb72d37f0d10))
- **client:** exposed several HTTP options for configuration ([a45e941](https://github.com/lukecarr/joodle/commit/a45e9419b33bf8c21f08d23dfac0d2d521890af1))
- **modules:** started work on core.user module ([3a9a3c9](https://github.com/lukecarr/joodle/commit/3a9a3c9266b9b7cf22b4cfe091bb17d582f8a190))
- **modules:** added fields to auth_email_get_signup_settings response ([0746334](https://github.com/lukecarr/joodle/commit/0746334ed492d3d231699d79328efe58cda2e157))
- **modules:** added auth_email_signup_user function ([3bb0e9d](https://github.com/lukecarr/joodle/commit/3bb0e9db7ab8dfdea011a098b0debec5b995b638))
- **modules:** added core_user_agree_site_policy function ([a4c895c](https://github.com/lukecarr/joodle/commit/a4c895cc76ecd26572b4a63a7a874392c30a85b1))
- **modules:** added core_user_create_users function ([52a8aef](https://github.com/lukecarr/joodle/commit/52a8aef5692984274ca692e175bcc1986d3971e6))
- **modules:** added core_user_delete_users function ([fe7d1d0](https://github.com/lukecarr/joodle/commit/fe7d1d01c830bc62ec6ee894a8fdb2b390fa347d))
- **modules:** added core_user_get_course_user_profiles function ([00dd783](https://github.com/lukecarr/joodle/commit/00dd783ac6872e40f6f1eeecc646023fe4c1adbf))
- **modules:** added core_user_get_private_files_info function ([db49f6d](https://github.com/lukecarr/joodle/commit/db49f6dc83acf415189f31aa2559ffe0133b7276))
- **modules:** added core_user_get_user_preferences function ([d4fb49f](https://github.com/lukecarr/joodle/commit/d4fb49f3ef389cad3b07229d9dcae5f296d3acbe))
- **modules:** added core_user_set_user_preferences function ([dfe43c0](https://github.com/lukecarr/joodle/commit/dfe43c0ba4db59f414433b0ac287a848a49985e8))
- **modules:** added core_user_update_picture function (and delete) ([9990fe4](https://github.com/lukecarr/joodle/commit/9990fe49e397e90ba5d08fd68a3a09a7578b826c))

### Bug Fixes

- **modules:** getUsers and getUsersByFields allowed invalid fields ([9d2fc91](https://github.com/lukecarr/joodle/commit/9d2fc9169fe4831a077f3731ffd1136981b5beaf))

### Refactors

- **modules:** moved module class file into src/modules directory ([47e1aa4](https://github.com/lukecarr/joodle/commit/47e1aa443fd14cfd71b8f894926b039c0684b4ab))
- **got:** HTTP requests now use qs to generate query strings ([f78ce13](https://github.com/lukecarr/joodle/commit/f78ce131009326842d6d64aab8cc41bc2f8036ac))
- **modules:** moved user interface into shared modules directory ([d403676](https://github.com/lukecarr/joodle/commit/d4036769603da02f1903cef36353ba7cc6c5d59c))
- moved FunctionResponse from functions/index.ts to functions.ts ([b8b92ba](https://github.com/lukecarr/joodle/commit/b8b92bad4c06fea97ba10bdafce8bc69e6ae7e44))
- **modules:** separated module responses into separate files ([3eb3b25](https://github.com/lukecarr/joodle/commit/3eb3b254ee0fc429da89db84a79917e9584034f6))

### Style

- **modules:** changed imports for modules ([217f66d](https://github.com/lukecarr/joodle/commit/217f66dd0ce39fcfe92cd458a709d4e4bff8a9e9))
- **modules:** fixed issue with linter formatting ([b779335](https://github.com/lukecarr/joodle/commit/b779335818067d9b852774d546ca37a27cd837c3))
- **eslint:** fixed inconsistent whitespace ([ebbcdd1](https://github.com/lukecarr/joodle/commit/ebbcdd1f0af2b45b91e606b7b04a8e05bd40cd14))

### Documentation

- **readme:** added guide on getHttpResponse() ([9f71135](https://github.com/lukecarr/joodle/commit/9f7113524480ef01522b1c5fb7c541646d8edff0))
- **readme:** tidied up Promise API docs ([1d47c2e](https://github.com/lukecarr/joodle/commit/1d47c2e19e31082de065d1362e3dc8a0768936e2))
- **readme:** added docs on using environment variables ([77b392f](https://github.com/lukecarr/joodle/commit/77b392fc6958126f1102e00974650cdd4476f399))
- **readme:** restructured README headings ([93a955d](https://github.com/lukecarr/joodle/commit/93a955dd3cdef477d001d26fe10a9b7f14bf83ef))
- **readme:** fixed typo ([3d30b27](https://github.com/lukecarr/joodle/commit/3d30b27f759f3a198243300f95aedc346822b1fa))
- **modules:** added missing docs to core.webservice module ([1d9a9b2](https://github.com/lukecarr/joodle/commit/1d9a9b2d2a200e8112ec22d6ed09aa069d61b624))
- **modules:** added missing documentation to core.user module ([b5d90f9](https://github.com/lukecarr/joodle/commit/b5d90f9bab05a1314cbb5d72532ec84345c16994))
- **readme:** added ko-fi link to README ([fa7ef10](https://github.com/lukecarr/joodle/commit/fa7ef102c419e48ffb14623fb0d7e00dfba7c00f))
- **readme:** added more key features ([85cb3c9](https://github.com/lukecarr/joodle/commit/85cb3c94179874bbe910ec37a73f44f4e8ba00ce))

### Tests

- created initial tests (with 100% coverage) ([989f82b](https://github.com/lukecarr/joodle/commit/989f82be863116847dd085aa3d12d70314050da7))
- added tests for environment variable config options ([78badb8](https://github.com/lukecarr/joodle/commit/78badb851d412018574c190ee77d0dca6a3bb6b1))
- added missing tests for new functions ([34fa75e](https://github.com/lukecarr/joodle/commit/34fa75ed4be4b1c6fa807c8441a4fc6efacce8da))

### Performance

- **npm:** removed unused NPM dependency ([de32873](https://github.com/lukecarr/joodle/commit/de328737b957fb2c0630cd045447ff177a5963b5))

# 0.1.3 (2020-05-20)

### Features

- **auth.email:** added response typings to getSignUpSettings() ([00b7186](https://github.com/lukecarr/joodle/commit/00b7186c8124c680a7b6207a42c48c88ad2e0529))

# 0.1.2 (2020-05-20)

### Bug Fixes

- changed from export default to export in main file ([60044e7](https://github.com/lukecarr/joodle/commit/60044e789d26f4d58172cbb50810f6ffde1178f4))

# 0.1.1 (2020-05-20)

### Bug Fixes

- **babel:** missing @babel/runtime dependency ([a1b79fb](https://github.com/lukecarr/joodle/commit/a1b79fbb787a417c035f9eb5e793d7a1a78dcbb7))

# 0.1.0 (2020-05-20)

### Features

- initial release ([c15d409](https://github.com/lukecarr/joodle/commit/c15d4093fe8ca559229a59162c4fca98ea5946ff))
