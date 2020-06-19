# Changelog

Here you can find a complete changelog of all Joodle releases!

## 0.2.2

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

## 0.2.1

### Features

- **modules:** added roles module (w/ assign and unassign functions) ([ae787ea](https://github.com/lukecarr/joodle/commit/ae787ea2817e80f62c24792ad0cf3a6603dd2890))

### Documentation

- **readme:** added code coverage shield ([35a7e19](https://github.com/lukecarr/joodle/commit/35a7e19931615b475155f115820049e5e16dc12d))
- initialised docs with VuePress ([2690b73](https://github.com/lukecarr/joodle/commit/2690b73cca056ec6adc9f1e0f906680b27c5114a))
- added docs (using VuePress) ([0319af3](https://github.com/lukecarr/joodle/commit/0319af3d136ed3e1aa3f0a955d98bc91f5bfee13))

### Refactors

- module-related class properties are now readonly ([efe56d7](https://github.com/lukecarr/joodle/commit/efe56d7f6c1cbec2e63a4692123263fded568706))

## 0.2.0

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

## 0.1.3 (2020-05-20)

### Features

- **auth.email:** added response typings to getSignUpSettings() ([00b7186](https://github.com/lukecarr/joodle/commit/00b7186c8124c680a7b6207a42c48c88ad2e0529))

## 0.1.2 (2020-05-20)

### Bug Fixes

- changed from export default to export in main file ([60044e7](https://github.com/lukecarr/joodle/commit/60044e789d26f4d58172cbb50810f6ffde1178f4))

## 0.1.1 (2020-05-20)

### Bug Fixes

- **babel:** missing @babel/runtime dependency ([a1b79fb](https://github.com/lukecarr/joodle/commit/a1b79fbb787a417c035f9eb5e793d7a1a78dcbb7))

## 0.1.0 (2020-05-20)

### Features

- initial release ([c15d409](https://github.com/lukecarr/joodle/commit/c15d4093fe8ca559229a59162c4fca98ea5946ff))
