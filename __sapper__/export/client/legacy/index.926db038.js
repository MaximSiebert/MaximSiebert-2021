import { r as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_each_argument, s as safe_not_equal, g as element, t as text, h as space, j as claim_element, k as children, l as claim_text, m as detach_dev, n as claim_space, o as add_location, p as attr_dev, q as insert_dev, u as append_dev, w as set_data_dev, x as query_selector_all, y as _slicedToArray, z as noop, A as destroy_each, B as validate_slots } from './client.bee22309.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
} // (94:3) {#each projects as project}


function create_each_block_4(ctx) {
  var a;
  var div0;
  var p0;
  var t0_value =
  /*project*/
  ctx[21].title + "";
  var t0;
  var t1;
  var div1;
  var p1;
  var t2_value =
  /*project*/
  ctx[21].role + "";
  var t2;
  var t3;
  var div2;
  var p2;
  var t4_value =
  /*project*/
  ctx[21].year + "";
  var t4;
  var t5;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      div0 = element("div");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      p1 = element("p");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      p2 = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      div0 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(a_nodes);
      div1 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, t2_value);
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(a_nodes);
      div2 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, t4_value);
      p2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 96, 6, 3474);
      attr_dev(div0, "class", "w-4/12 px-4");
      add_location(div0, file, 95, 5, 3442);
      add_location(p1, file, 99, 6, 3562);
      attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div1, file, 98, 5, 3514);
      add_location(p2, file, 102, 6, 3660);
      attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div2, file, 101, 5, 3601);
      attr_dev(a, "class", "flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
      attr_dev(a, "href", a_href_value =
      /*project*/
      ctx[21].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer noopener");
      add_location(a, file, 94, 4, 3255);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, div0);
      append_dev(div0, p0);
      append_dev(p0, t0);
      append_dev(a, t1);
      append_dev(a, div1);
      append_dev(div1, p1);
      append_dev(p1, t2);
      append_dev(a, t3);
      append_dev(a, div2);
      append_dev(div2, p2);
      append_dev(p2, t4);
      append_dev(a, t5);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*projects*/
      1 && t0_value !== (t0_value =
      /*project*/
      ctx[21].title + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*projects*/
      1 && t2_value !== (t2_value =
      /*project*/
      ctx[21].role + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*projects*/
      1 && t4_value !== (t4_value =
      /*project*/
      ctx[21].year + "")) set_data_dev(t4, t4_value);

      if (dirty &
      /*projects*/
      1 && a_href_value !== (a_href_value =
      /*project*/
      ctx[21].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_4.name,
    type: "each",
    source: "(94:3) {#each projects as project}",
    ctx: ctx
  });
  return block;
} // (124:3) {#each experiences as experience}


function create_each_block_3(ctx) {
  var a;
  var div0;
  var p0;
  var t0_value =
  /*experience*/
  ctx[18].title + "";
  var t0;
  var t1;
  var div1;
  var p1;
  var t2_value =
  /*experience*/
  ctx[18].role + "";
  var t2;
  var t3;
  var div2;
  var p2;
  var t4_value =
  /*experience*/
  ctx[18].date + "";
  var t4;
  var t5;
  var a_href_value;
  var block = {
    c: function create() {
      a = element("a");
      div0 = element("div");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      p1 = element("p");
      t2 = text(t2_value);
      t3 = space();
      div2 = element("div");
      p2 = element("p");
      t4 = text(t4_value);
      t5 = space();
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      div0 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(a_nodes);
      div1 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, t2_value);
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(a_nodes);
      div2 = claim_element(a_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t4 = claim_text(p2_nodes, t4_value);
      p2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(a_nodes);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(p0, file, 126, 6, 4396);
      attr_dev(div0, "class", "w-4/12 px-4");
      add_location(div0, file, 125, 5, 4364);
      add_location(p1, file, 129, 6, 4487);
      attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div1, file, 128, 5, 4439);
      add_location(p2, file, 132, 6, 4588);
      attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div2, file, 131, 5, 4529);
      attr_dev(a, "class", "flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
      attr_dev(a, "href", a_href_value =
      /*experience*/
      ctx[18].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer noopener");
      add_location(a, file, 124, 4, 4174);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, div0);
      append_dev(div0, p0);
      append_dev(p0, t0);
      append_dev(a, t1);
      append_dev(a, div1);
      append_dev(div1, p1);
      append_dev(p1, t2);
      append_dev(a, t3);
      append_dev(a, div2);
      append_dev(div2, p2);
      append_dev(p2, t4);
      append_dev(a, t5);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*experiences*/
      2 && t0_value !== (t0_value =
      /*experience*/
      ctx[18].title + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*experiences*/
      2 && t2_value !== (t2_value =
      /*experience*/
      ctx[18].role + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*experiences*/
      2 && t4_value !== (t4_value =
      /*experience*/
      ctx[18].date + "")) set_data_dev(t4, t4_value);

      if (dirty &
      /*experiences*/
      2 && a_href_value !== (a_href_value =
      /*experience*/
      ctx[18].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_3.name,
    type: "each",
    source: "(124:3) {#each experiences as experience}",
    ctx: ctx
  });
  return block;
} // (142:3) {#each services as service}


function create_each_block_2(ctx) {
  var p;
  var t_value =
  /*service*/
  ctx[15].title + "";
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-gray-600 dark:text-gray-400");
      add_location(p, file, 142, 4, 4820);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*services*/
      8 && t_value !== (t_value =
      /*service*/
      ctx[15].title + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_2.name,
    type: "each",
    source: "(142:3) {#each services as service}",
    ctx: ctx
  });
  return block;
} // (148:3) {#each collaborators as collaborator}


function create_each_block_1(ctx) {
  var p;
  var t_value =
  /*collaborator*/
  ctx[12].title + "";
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-gray-600 dark:text-gray-400");
      add_location(p, file, 148, 4, 5039);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*collaborators*/
      4 && t_value !== (t_value =
      /*collaborator*/
      ctx[12].title + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(148:3) {#each collaborators as collaborator}",
    ctx: ctx
  });
  return block;
} // (154:3) {#each links as link}


function create_each_block(ctx) {
  var p;
  var a;
  var t_value =
  /*link*/
  ctx[9].title + "";
  var t;
  var a_href_value;
  var block = {
    c: function create() {
      p = element("p");
      a = element("a");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", {
        href: true,
        class: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, t_value);
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", a_href_value =
      /*link*/
      ctx[9].url);
      attr_dev(a, "class", "text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noreferrer noopener");
      add_location(a, file, 154, 7, 5238);
      add_location(p, file, 154, 4, 5235);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, a);
      append_dev(a, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*links*/
      16 && t_value !== (t_value =
      /*link*/
      ctx[9].title + "")) set_data_dev(t, t_value);

      if (dirty &
      /*links*/
      16 && a_href_value !== (a_href_value =
      /*link*/
      ctx[9].url)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(154:3) {#each links as link}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var div21;
  var header0;
  var div1;
  var a;
  var t1;
  var t2;
  var div0;
  var t3;
  var div5;
  var div2;
  var p0;
  var t4;
  var t5;
  var div3;
  var p1;
  var t6;
  var t7;
  var div4;
  var p2;
  var t8;
  var t9;
  var section0;
  var div6;
  var t10;
  var div7;
  var t11;
  var header1;
  var div11;
  var div8;
  var p3;
  var t12;
  var t13;
  var div9;
  var p4;
  var t14;
  var t15;
  var div10;
  var p5;
  var t16;
  var t17;
  var section1;
  var div12;
  var t18;
  var section2;
  var div13;
  var p6;
  var t19;
  var t20;
  var t21;
  var div14;
  var p7;
  var t22;
  var t23;
  var t24;
  var div15;
  var p8;
  var t25;
  var t26;
  var t27;
  var div20;
  var div16;
  var p9;
  var t28;
  var t29;
  var t30;
  var t31;
  var div19;
  var div17;
  var p10;
  var t32;
  var t33;
  var div18;
  var p11;
  var t34;
  var t35;
  var t36;
  var each_value_4 =
  /*projects*/
  ctx[0];
  validate_each_argument(each_value_4);
  var each_blocks_4 = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks_4[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var each_value_3 =
  /*experiences*/
  ctx[1];
  validate_each_argument(each_value_3);
  var each_blocks_3 = [];

  for (var _i = 0; _i < each_value_3.length; _i += 1) {
    each_blocks_3[_i] = create_each_block_3(get_each_context_3(ctx, each_value_3, _i));
  }

  var each_value_2 =
  /*services*/
  ctx[3];
  validate_each_argument(each_value_2);
  var each_blocks_2 = [];

  for (var _i2 = 0; _i2 < each_value_2.length; _i2 += 1) {
    each_blocks_2[_i2] = create_each_block_2(get_each_context_2(ctx, each_value_2, _i2));
  }

  var each_value_1 =
  /*collaborators*/
  ctx[2];
  validate_each_argument(each_value_1);
  var each_blocks_1 = [];

  for (var _i3 = 0; _i3 < each_value_1.length; _i3 += 1) {
    each_blocks_1[_i3] = create_each_block_1(get_each_context_1(ctx, each_value_1, _i3));
  }

  var each_value =
  /*links*/
  ctx[4];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
    each_blocks[_i4] = create_each_block(get_each_context(ctx, each_value, _i4));
  }

  var block = {
    c: function create() {
      t0 = space();
      div21 = element("div");
      header0 = element("header");
      div1 = element("div");
      a = element("a");
      t1 = text("Maxim Siebert");
      t2 = space();
      div0 = element("div");
      t3 = space();
      div5 = element("div");
      div2 = element("div");
      p0 = element("p");
      t4 = text("Project");
      t5 = space();
      div3 = element("div");
      p1 = element("p");
      t6 = text("Role");
      t7 = space();
      div4 = element("div");
      p2 = element("p");
      t8 = text("Year");
      t9 = space();
      section0 = element("section");
      div6 = element("div");
      t10 = space();
      div7 = element("div");

      for (var _i5 = 0; _i5 < each_blocks_4.length; _i5 += 1) {
        each_blocks_4[_i5].c();
      }

      t11 = space();
      header1 = element("header");
      div11 = element("div");
      div8 = element("div");
      p3 = element("p");
      t12 = text("Experience");
      t13 = space();
      div9 = element("div");
      p4 = element("p");
      t14 = text("Title");
      t15 = space();
      div10 = element("div");
      p5 = element("p");
      t16 = text("Year");
      t17 = space();
      section1 = element("section");
      div12 = element("div");

      for (var _i6 = 0; _i6 < each_blocks_3.length; _i6 += 1) {
        each_blocks_3[_i6].c();
      }

      t18 = space();
      section2 = element("section");
      div13 = element("div");
      p6 = element("p");
      t19 = text("Services");
      t20 = space();

      for (var _i7 = 0; _i7 < each_blocks_2.length; _i7 += 1) {
        each_blocks_2[_i7].c();
      }

      t21 = space();
      div14 = element("div");
      p7 = element("p");
      t22 = text("Selected Collaborators");
      t23 = space();

      for (var _i8 = 0; _i8 < each_blocks_1.length; _i8 += 1) {
        each_blocks_1[_i8].c();
      }

      t24 = space();
      div15 = element("div");
      p8 = element("p");
      t25 = text("Links");
      t26 = space();

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].c();
      }

      t27 = space();
      div20 = element("div");
      div16 = element("div");
      p9 = element("p");
      t28 = text("Ottawa – ");
      t29 = text(
      /*time*/
      ctx[5]);
      t30 = text(" ET");
      t31 = space();
      div19 = element("div");
      div17 = element("div");
      p10 = element("p");
      t32 = text("Updated 05/2021");
      t33 = space();
      div18 = element("div");
      p11 = element("p");
      t34 = text("2011 – ");
      t35 = text(
      /*year*/
      ctx[6]);
      t36 = text(" ©");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1e6j3ni\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div21 = claim_element(nodes, "DIV", {
        class: true
      });
      var div21_nodes = children(div21);
      header0 = claim_element(div21_nodes, "HEADER", {
        class: true
      });
      var header0_nodes = children(header0);
      div1 = claim_element(header0_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Maxim Siebert");
      a_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(header0_nodes);
      div5 = claim_element(header0_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      p0 = claim_element(div2_nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "Project");
      p0_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p1 = claim_element(div3_nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Role");
      p1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t7 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      p2 = claim_element(div4_nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "Year");
      p2_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      header0_nodes.forEach(detach_dev);
      t9 = claim_space(div21_nodes);
      section0 = claim_element(div21_nodes, "SECTION", {
        class: true
      });
      var section0_nodes = children(section0);
      div6 = claim_element(section0_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div6_nodes.forEach(detach_dev);
      t10 = claim_space(section0_nodes);
      div7 = claim_element(section0_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);

      for (var _i10 = 0; _i10 < each_blocks_4.length; _i10 += 1) {
        each_blocks_4[_i10].l(div7_nodes);
      }

      div7_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t11 = claim_space(div21_nodes);
      header1 = claim_element(div21_nodes, "HEADER", {
        class: true
      });
      var header1_nodes = children(header1);
      div11 = claim_element(header1_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div8 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      p3 = claim_element(div8_nodes, "P", {});
      var p3_nodes = children(p3);
      t12 = claim_text(p3_nodes, "Experience");
      p3_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t13 = claim_space(div11_nodes);
      div9 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      p4 = claim_element(div9_nodes, "P", {});
      var p4_nodes = children(p4);
      t14 = claim_text(p4_nodes, "Title");
      p4_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      t15 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      p5 = claim_element(div10_nodes, "P", {});
      var p5_nodes = children(p5);
      t16 = claim_text(p5_nodes, "Year");
      p5_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      header1_nodes.forEach(detach_dev);
      t17 = claim_space(div21_nodes);
      section1 = claim_element(div21_nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      div12 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);

      for (var _i11 = 0; _i11 < each_blocks_3.length; _i11 += 1) {
        each_blocks_3[_i11].l(div12_nodes);
      }

      div12_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      t18 = claim_space(div21_nodes);
      section2 = claim_element(div21_nodes, "SECTION", {
        class: true
      });
      var section2_nodes = children(section2);
      div13 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      p6 = claim_element(div13_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t19 = claim_text(p6_nodes, "Services");
      p6_nodes.forEach(detach_dev);
      t20 = claim_space(div13_nodes);

      for (var _i12 = 0; _i12 < each_blocks_2.length; _i12 += 1) {
        each_blocks_2[_i12].l(div13_nodes);
      }

      div13_nodes.forEach(detach_dev);
      t21 = claim_space(section2_nodes);
      div14 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      p7 = claim_element(div14_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t22 = claim_text(p7_nodes, "Selected Collaborators");
      p7_nodes.forEach(detach_dev);
      t23 = claim_space(div14_nodes);

      for (var _i13 = 0; _i13 < each_blocks_1.length; _i13 += 1) {
        each_blocks_1[_i13].l(div14_nodes);
      }

      div14_nodes.forEach(detach_dev);
      t24 = claim_space(section2_nodes);
      div15 = claim_element(section2_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      p8 = claim_element(div15_nodes, "P", {
        class: true
      });
      var p8_nodes = children(p8);
      t25 = claim_text(p8_nodes, "Links");
      p8_nodes.forEach(detach_dev);
      t26 = claim_space(div15_nodes);

      for (var _i14 = 0; _i14 < each_blocks.length; _i14 += 1) {
        each_blocks[_i14].l(div15_nodes);
      }

      div15_nodes.forEach(detach_dev);
      section2_nodes.forEach(detach_dev);
      t27 = claim_space(div21_nodes);
      div20 = claim_element(div21_nodes, "DIV", {
        class: true
      });
      var div20_nodes = children(div20);
      div16 = claim_element(div20_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      p9 = claim_element(div16_nodes, "P", {});
      var p9_nodes = children(p9);
      t28 = claim_text(p9_nodes, "Ottawa – ");
      t29 = claim_text(p9_nodes,
      /*time*/
      ctx[5]);
      t30 = claim_text(p9_nodes, " ET");
      p9_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      t31 = claim_space(div20_nodes);
      div19 = claim_element(div20_nodes, "DIV", {
        class: true
      });
      var div19_nodes = children(div19);
      div17 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      p10 = claim_element(div17_nodes, "P", {});
      var p10_nodes = children(p10);
      t32 = claim_text(p10_nodes, "Updated 05/2021");
      p10_nodes.forEach(detach_dev);
      div17_nodes.forEach(detach_dev);
      t33 = claim_space(div19_nodes);
      div18 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      p11 = claim_element(div18_nodes, "P", {});
      var p11_nodes = children(p11);
      t34 = claim_text(p11_nodes, "2011 – ");
      t35 = claim_text(p11_nodes,
      /*year*/
      ctx[6]);
      t36 = claim_text(p11_nodes, " ©");
      p11_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      div20_nodes.forEach(detach_dev);
      div21_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Maxim Siebert – Designer & Developer";
      attr_dev(a, "href", "/");
      attr_dev(a, "class", "inline-block mb-2 hover:underline md:mb-0");
      add_location(a, file, 71, 3, 2546);
      attr_dev(div0, "class", "block text-gray-600 dark:text-gray-400 md:hidden");
      add_location(div0, file, 72, 3, 2629);
      attr_dev(div1, "class", "w-full px-4 mb-8 lg:w-3/12 md:w-4/12 md:mb-0");
      add_location(div1, file, 70, 2, 2484);
      add_location(p0, file, 78, 4, 2814);
      attr_dev(div2, "class", "w-4/12 px-4");
      add_location(div2, file, 77, 3, 2784);
      add_location(p1, file, 81, 4, 2888);
      attr_dev(div3, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div3, file, 80, 3, 2842);
      add_location(p2, file, 84, 4, 2970);
      attr_dev(div4, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div4, file, 83, 3, 2913);
      attr_dev(div5, "class", "flex w-full ml-auto md:w-8/12");
      add_location(div5, file, 76, 2, 2737);
      attr_dev(header0, "class", "flex flex-wrap mb-2");
      add_location(header0, file, 69, 1, 2445);
      attr_dev(div6, "class", "hidden w-4/12 px-4 text-gray-600 lg:w-3/12 dark:text-gray-400 md:block");
      add_location(div6, file, 89, 2, 3062);
      attr_dev(div7, "class", "w-full ml-auto md:w-8/12");
      add_location(div7, file, 92, 2, 3181);
      attr_dev(section0, "class", "flex flex-wrap mb-8 md:mb-12");
      add_location(section0, file, 88, 1, 3013);
      add_location(p3, file, 111, 4, 3842);
      attr_dev(div8, "class", "w-4/12 px-4");
      add_location(div8, file, 110, 3, 3812);
      add_location(p4, file, 114, 4, 3919);
      attr_dev(div9, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div9, file, 113, 3, 3873);
      add_location(p5, file, 117, 4, 4002);
      attr_dev(div10, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
      add_location(div10, file, 116, 3, 3945);
      attr_dev(div11, "class", "flex w-full ml-auto md:w-8/12");
      add_location(div11, file, 109, 2, 3765);
      attr_dev(header1, "class", "flex mb-2");
      add_location(header1, file, 108, 1, 3736);
      attr_dev(div12, "class", "w-full ml-auto md:w-8/12");
      add_location(div12, file, 122, 2, 4094);
      attr_dev(section1, "class", "flex flex-wrap mb-8 md:mb-12");
      add_location(section1, file, 121, 1, 4045);
      attr_dev(p6, "class", "mb-2");
      add_location(p6, file, 140, 3, 4756);
      attr_dev(div13, "class", "w-4/12 px-4");
      add_location(div13, file, 139, 2, 4727);
      attr_dev(p7, "class", "mb-2");
      add_location(p7, file, 146, 3, 4951);
      attr_dev(div14, "class", "hidden w-4/12 px-4 sm:block");
      add_location(div14, file, 145, 2, 4906);
      attr_dev(p8, "class", "mb-2");
      add_location(p8, file, 152, 3, 5180);
      attr_dev(div15, "class", "w-8/12 px-4 text-right sm:w-4/12");
      add_location(div15, file, 151, 2, 5130);
      attr_dev(section2, "class", "flex flex-wrap w-full ml-auto md:w-8/12");
      add_location(section2, file, 138, 1, 4667);
      add_location(p9, file, 160, 3, 5567);
      attr_dev(div16, "class", "w-8/12 px-4 sm:w-3/12");
      add_location(div16, file, 159, 2, 5528);
      add_location(p10, file, 164, 4, 5697);
      attr_dev(div17, "class", "hidden w-8/12 px-4 sm:block");
      add_location(div17, file, 163, 3, 5651);
      add_location(p11, file, 167, 4, 5790);
      attr_dev(div18, "class", "flex justify-end w-full px-4 sm:w-4/12");
      add_location(div18, file, 166, 3, 5733);
      attr_dev(div19, "class", "flex w-4/12 ml-auto sm:w-8/12");
      add_location(div19, file, 162, 2, 5604);
      attr_dev(div20, "class", "flex pt-8 mt-auto text-gray-600 md:pt-12 dark:text-gray-400");
      add_location(div20, file, 158, 1, 5452);
      attr_dev(div21, "class", "flex flex-col min-h-screen py-4 text-xs bg-gray-100 lg:py-8 lg:px-4 dark:bg-black dark:text-white");
      add_location(div21, file, 67, 0, 2277);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div21, anchor);
      append_dev(div21, header0);
      append_dev(header0, div1);
      append_dev(div1, a);
      append_dev(a, t1);
      append_dev(div1, t2);
      append_dev(div1, div0);
      div0.innerHTML =
      /*description*/
      ctx[7];
      append_dev(header0, t3);
      append_dev(header0, div5);
      append_dev(div5, div2);
      append_dev(div2, p0);
      append_dev(p0, t4);
      append_dev(div5, t5);
      append_dev(div5, div3);
      append_dev(div3, p1);
      append_dev(p1, t6);
      append_dev(div5, t7);
      append_dev(div5, div4);
      append_dev(div4, p2);
      append_dev(p2, t8);
      append_dev(div21, t9);
      append_dev(div21, section0);
      append_dev(section0, div6);
      div6.innerHTML =
      /*description*/
      ctx[7];
      append_dev(section0, t10);
      append_dev(section0, div7);

      for (var _i15 = 0; _i15 < each_blocks_4.length; _i15 += 1) {
        each_blocks_4[_i15].m(div7, null);
      }

      append_dev(div21, t11);
      append_dev(div21, header1);
      append_dev(header1, div11);
      append_dev(div11, div8);
      append_dev(div8, p3);
      append_dev(p3, t12);
      append_dev(div11, t13);
      append_dev(div11, div9);
      append_dev(div9, p4);
      append_dev(p4, t14);
      append_dev(div11, t15);
      append_dev(div11, div10);
      append_dev(div10, p5);
      append_dev(p5, t16);
      append_dev(div21, t17);
      append_dev(div21, section1);
      append_dev(section1, div12);

      for (var _i16 = 0; _i16 < each_blocks_3.length; _i16 += 1) {
        each_blocks_3[_i16].m(div12, null);
      }

      append_dev(div21, t18);
      append_dev(div21, section2);
      append_dev(section2, div13);
      append_dev(div13, p6);
      append_dev(p6, t19);
      append_dev(div13, t20);

      for (var _i17 = 0; _i17 < each_blocks_2.length; _i17 += 1) {
        each_blocks_2[_i17].m(div13, null);
      }

      append_dev(section2, t21);
      append_dev(section2, div14);
      append_dev(div14, p7);
      append_dev(p7, t22);
      append_dev(div14, t23);

      for (var _i18 = 0; _i18 < each_blocks_1.length; _i18 += 1) {
        each_blocks_1[_i18].m(div14, null);
      }

      append_dev(section2, t24);
      append_dev(section2, div15);
      append_dev(div15, p8);
      append_dev(p8, t25);
      append_dev(div15, t26);

      for (var _i19 = 0; _i19 < each_blocks.length; _i19 += 1) {
        each_blocks[_i19].m(div15, null);
      }

      append_dev(div21, t27);
      append_dev(div21, div20);
      append_dev(div20, div16);
      append_dev(div16, p9);
      append_dev(p9, t28);
      append_dev(p9, t29);
      append_dev(p9, t30);
      append_dev(div20, t31);
      append_dev(div20, div19);
      append_dev(div19, div17);
      append_dev(div17, p10);
      append_dev(p10, t32);
      append_dev(div19, t33);
      append_dev(div19, div18);
      append_dev(div18, p11);
      append_dev(p11, t34);
      append_dev(p11, t35);
      append_dev(p11, t36);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*projects*/
      1) {
        each_value_4 =
        /*projects*/
        ctx[0];
        validate_each_argument(each_value_4);

        var _i20;

        for (_i20 = 0; _i20 < each_value_4.length; _i20 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i20);

          if (each_blocks_4[_i20]) {
            each_blocks_4[_i20].p(child_ctx, dirty);
          } else {
            each_blocks_4[_i20] = create_each_block_4(child_ctx);

            each_blocks_4[_i20].c();

            each_blocks_4[_i20].m(div7, null);
          }
        }

        for (; _i20 < each_blocks_4.length; _i20 += 1) {
          each_blocks_4[_i20].d(1);
        }

        each_blocks_4.length = each_value_4.length;
      }

      if (dirty &
      /*experiences*/
      2) {
        each_value_3 =
        /*experiences*/
        ctx[1];
        validate_each_argument(each_value_3);

        var _i21;

        for (_i21 = 0; _i21 < each_value_3.length; _i21 += 1) {
          var _child_ctx = get_each_context_3(ctx, each_value_3, _i21);

          if (each_blocks_3[_i21]) {
            each_blocks_3[_i21].p(_child_ctx, dirty);
          } else {
            each_blocks_3[_i21] = create_each_block_3(_child_ctx);

            each_blocks_3[_i21].c();

            each_blocks_3[_i21].m(div12, null);
          }
        }

        for (; _i21 < each_blocks_3.length; _i21 += 1) {
          each_blocks_3[_i21].d(1);
        }

        each_blocks_3.length = each_value_3.length;
      }

      if (dirty &
      /*services*/
      8) {
        each_value_2 =
        /*services*/
        ctx[3];
        validate_each_argument(each_value_2);

        var _i22;

        for (_i22 = 0; _i22 < each_value_2.length; _i22 += 1) {
          var _child_ctx2 = get_each_context_2(ctx, each_value_2, _i22);

          if (each_blocks_2[_i22]) {
            each_blocks_2[_i22].p(_child_ctx2, dirty);
          } else {
            each_blocks_2[_i22] = create_each_block_2(_child_ctx2);

            each_blocks_2[_i22].c();

            each_blocks_2[_i22].m(div13, null);
          }
        }

        for (; _i22 < each_blocks_2.length; _i22 += 1) {
          each_blocks_2[_i22].d(1);
        }

        each_blocks_2.length = each_value_2.length;
      }

      if (dirty &
      /*collaborators*/
      4) {
        each_value_1 =
        /*collaborators*/
        ctx[2];
        validate_each_argument(each_value_1);

        var _i23;

        for (_i23 = 0; _i23 < each_value_1.length; _i23 += 1) {
          var _child_ctx3 = get_each_context_1(ctx, each_value_1, _i23);

          if (each_blocks_1[_i23]) {
            each_blocks_1[_i23].p(_child_ctx3, dirty);
          } else {
            each_blocks_1[_i23] = create_each_block_1(_child_ctx3);

            each_blocks_1[_i23].c();

            each_blocks_1[_i23].m(div14, null);
          }
        }

        for (; _i23 < each_blocks_1.length; _i23 += 1) {
          each_blocks_1[_i23].d(1);
        }

        each_blocks_1.length = each_value_1.length;
      }

      if (dirty &
      /*links*/
      16) {
        each_value =
        /*links*/
        ctx[4];
        validate_each_argument(each_value);

        var _i24;

        for (_i24 = 0; _i24 < each_value.length; _i24 += 1) {
          var _child_ctx4 = get_each_context(ctx, each_value, _i24);

          if (each_blocks[_i24]) {
            each_blocks[_i24].p(_child_ctx4, dirty);
          } else {
            each_blocks[_i24] = create_each_block(_child_ctx4);

            each_blocks[_i24].c();

            each_blocks[_i24].m(div15, null);
          }
        }

        for (; _i24 < each_blocks.length; _i24 += 1) {
          each_blocks[_i24].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*time*/
      32) set_data_dev(t29,
      /*time*/
      ctx[5]);
      if (dirty &
      /*year*/
      64) set_data_dev(t35,
      /*year*/
      ctx[6]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div21);
      destroy_each(each_blocks_4, detaching);
      destroy_each(each_blocks_3, detaching);
      destroy_each(each_blocks_2, detaching);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var getProjects, projects, getExperiences, experiences, getCollaborators, collaborators, getServices, services, getLinks, links;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref3.params, _ref3.query;
            _context.next = 3;
            return this.fetch("content/projects.json");

          case 3:
            getProjects = _context.sent;
            _context.next = 6;
            return getProjects.json();

          case 6:
            projects = _context.sent;
            _context.next = 9;
            return this.fetch("content/experiences.json");

          case 9:
            getExperiences = _context.sent;
            _context.next = 12;
            return getExperiences.json();

          case 12:
            experiences = _context.sent;
            _context.next = 15;
            return this.fetch("content/collaborators.json");

          case 15:
            getCollaborators = _context.sent;
            _context.next = 18;
            return getCollaborators.json();

          case 18:
            collaborators = _context.sent;
            _context.next = 21;
            return this.fetch("content/services.json");

          case 21:
            getServices = _context.sent;
            _context.next = 24;
            return getServices.json();

          case 24:
            services = _context.sent;
            _context.next = 27;
            return this.fetch("content/links.json");

          case 27:
            getLinks = _context.sent;
            _context.next = 30;
            return getLinks.json();

          case 30:
            links = _context.sent;
            return _context.abrupt("return", {
              projects: projects,
              experiences: experiences,
              collaborators: collaborators,
              services: services,
              links: links
            });

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var projects = $$props.projects;
  var experiences = $$props.experiences;
  var collaborators = $$props.collaborators;
  var services = $$props.services;
  var links = $$props.links;
  var time = "";
  var year = "";
  var description = "is a French Canadian Designer & Developer. He's currently a Principal Designer at <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Peggy</a> and freelances through his studio <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to discuss new commissions or collaborate with Maxim email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>.";

  function updateClock() {
    var now = new Date(),
        hour = now.getHours(),
        minutes = now.getMinutes(),
        sep = ":",
        ampm = "am"; // current date

    if (hour >= 12) {
      hour -= 12;
      ampm = "pm";
    }

    minutes = minutes < 10 ? "0" + minutes : minutes;
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    // set the content of the element with the ID time to the formatted string

    $$invalidate(5, time = hour + sep + minutes + " " + ampm);
    $$invalidate(6, year = now.getFullYear()); // call this function again in 1000ms

    setTimeout(updateClock, 1000);
  }

  updateClock();
  var writable_props = ["projects", "experiences", "collaborators", "services", "links"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
    if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
    if ("collaborators" in $$props) $$invalidate(2, collaborators = $$props.collaborators);
    if ("services" in $$props) $$invalidate(3, services = $$props.services);
    if ("links" in $$props) $$invalidate(4, links = $$props.links);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      projects: projects,
      experiences: experiences,
      collaborators: collaborators,
      services: services,
      links: links,
      time: time,
      year: year,
      description: description,
      updateClock: updateClock
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
    if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
    if ("collaborators" in $$props) $$invalidate(2, collaborators = $$props.collaborators);
    if ("services" in $$props) $$invalidate(3, services = $$props.services);
    if ("links" in $$props) $$invalidate(4, links = $$props.links);
    if ("time" in $$props) $$invalidate(5, time = $$props.time);
    if ("year" in $$props) $$invalidate(6, year = $$props.year);
    if ("description" in $$props) $$invalidate(7, description = $$props.description);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [projects, experiences, collaborators, services, links, time, year, description];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      projects: 0,
      experiences: 1,
      collaborators: 2,
      services: 3,
      links: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*projects*/
    ctx[0] === undefined && !("projects" in props)) {
      console.warn("<Routes> was created without expected prop 'projects'");
    }

    if (
    /*experiences*/
    ctx[1] === undefined && !("experiences" in props)) {
      console.warn("<Routes> was created without expected prop 'experiences'");
    }

    if (
    /*collaborators*/
    ctx[2] === undefined && !("collaborators" in props)) {
      console.warn("<Routes> was created without expected prop 'collaborators'");
    }

    if (
    /*services*/
    ctx[3] === undefined && !("services" in props)) {
      console.warn("<Routes> was created without expected prop 'services'");
    }

    if (
    /*links*/
    ctx[4] === undefined && !("links" in props)) {
      console.warn("<Routes> was created without expected prop 'links'");
    }

    return _this;
  }

  _createClass(Routes, [{
    key: "projects",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "experiences",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "collaborators",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "services",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "links",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Routes;
}(SvelteComponentDev);

export default Routes;
export { preload };
