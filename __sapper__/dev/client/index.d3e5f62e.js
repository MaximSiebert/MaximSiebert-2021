import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_each_argument, a as validate_slots, e as element, t as text, b as space, c as claim_element, f as children, g as claim_text, h as detach_dev, j as claim_space, k as add_location, l as attr_dev, m as insert_dev, n as append_dev, o as set_data_dev, q as query_selector_all, p as noop, r as destroy_each } from './client.166ccd00.js';

/* src/routes/index.svelte generated by Svelte v3.38.2 */

const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (82:3) {#each projects as project}
function create_each_block_1(ctx) {
	let a;
	let div0;
	let p0;
	let t0_value = /*project*/ ctx[9].title + "";
	let t0;
	let t1;
	let div1;
	let p1;
	let t2_value = /*project*/ ctx[9].role + "";
	let t2;
	let t3;
	let div2;
	let p2;
	let t4_value = /*project*/ ctx[9].year + "";
	let t4;
	let t5;
	let a_href_value;

	const block = {
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
			div0 = claim_element(a_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, t2_value);
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			div2 = claim_element(a_nodes, "DIV", { class: true });
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
			add_location(p0, file, 84, 6, 2976);
			attr_dev(div0, "class", "w-4/12 px-4");
			add_location(div0, file, 83, 5, 2944);
			add_location(p1, file, 87, 6, 3064);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 86, 5, 3016);
			add_location(p2, file, 90, 6, 3162);
			attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
			add_location(div2, file, 89, 5, 3103);
			attr_dev(a, "class", "flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*project*/ ctx[9].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 82, 4, 2757);
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
			if (dirty & /*projects*/ 1 && t0_value !== (t0_value = /*project*/ ctx[9].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*projects*/ 1 && t2_value !== (t2_value = /*project*/ ctx[9].role + "")) set_data_dev(t2, t2_value);
			if (dirty & /*projects*/ 1 && t4_value !== (t4_value = /*project*/ ctx[9].year + "")) set_data_dev(t4, t4_value);

			if (dirty & /*projects*/ 1 && a_href_value !== (a_href_value = /*project*/ ctx[9].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(82:3) {#each projects as project}",
		ctx
	});

	return block;
}

// (112:3) {#each experiences as experience}
function create_each_block(ctx) {
	let a;
	let div0;
	let p0;
	let t0_value = /*experience*/ ctx[6].title + "";
	let t0;
	let t1;
	let div1;
	let p1;
	let t2_value = /*experience*/ ctx[6].role + "";
	let t2;
	let t3;
	let div2;
	let p2;
	let t4_value = /*experience*/ ctx[6].date + "";
	let t4;
	let t5;
	let a_href_value;

	const block = {
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
			div0 = claim_element(a_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, t0_value);
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			div1 = claim_element(a_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, t2_value);
			p1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(a_nodes);
			div2 = claim_element(a_nodes, "DIV", { class: true });
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
			add_location(p0, file, 114, 6, 3884);
			attr_dev(div0, "class", "w-4/12 px-4");
			add_location(div0, file, 113, 5, 3852);
			add_location(p1, file, 117, 6, 3975);
			attr_dev(div1, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div1, file, 116, 5, 3927);
			add_location(p2, file, 120, 6, 4076);
			attr_dev(div2, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
			add_location(div2, file, 119, 5, 4017);
			attr_dev(a, "class", "flex block ml-auto text-gray-600 dark:text-gray-400 hover:underline hover:text-black dark:hover:text-white");
			attr_dev(a, "href", a_href_value = /*experience*/ ctx[6].url);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "rel", "noreferrer noopener");
			add_location(a, file, 112, 4, 3662);
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
			if (dirty & /*experiences*/ 2 && t0_value !== (t0_value = /*experience*/ ctx[6].title + "")) set_data_dev(t0, t0_value);
			if (dirty & /*experiences*/ 2 && t2_value !== (t2_value = /*experience*/ ctx[6].role + "")) set_data_dev(t2, t2_value);
			if (dirty & /*experiences*/ 2 && t4_value !== (t4_value = /*experience*/ ctx[6].date + "")) set_data_dev(t4, t4_value);

			if (dirty & /*experiences*/ 2 && a_href_value !== (a_href_value = /*experience*/ ctx[6].url)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(112:3) {#each experiences as experience}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div19;
	let div0;
	let t1;
	let header0;
	let div2;
	let a;
	let t2;
	let t3;
	let div1;
	let t4;
	let div6;
	let div3;
	let p0;
	let t5;
	let t6;
	let div4;
	let p1;
	let t7;
	let t8;
	let div5;
	let p2;
	let t9;
	let t10;
	let section0;
	let div7;
	let t11;
	let div8;
	let t12;
	let header1;
	let div12;
	let div9;
	let p3;
	let t13;
	let t14;
	let div10;
	let p4;
	let t15;
	let t16;
	let div11;
	let p5;
	let t17;
	let t18;
	let section1;
	let div13;
	let t19;
	let div18;
	let div14;
	let p6;
	let t20;
	let t21;
	let t22;
	let t23;
	let div17;
	let div15;
	let p7;
	let t24;
	let t25;
	let div16;
	let p8;
	let t26;
	let t27;
	let each_value_1 = /*projects*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*experiences*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div19 = element("div");
			div0 = element("div");
			t1 = space();
			header0 = element("header");
			div2 = element("div");
			a = element("a");
			t2 = text("Maxim Siebert");
			t3 = space();
			div1 = element("div");
			t4 = space();
			div6 = element("div");
			div3 = element("div");
			p0 = element("p");
			t5 = text("Project");
			t6 = space();
			div4 = element("div");
			p1 = element("p");
			t7 = text("Role");
			t8 = space();
			div5 = element("div");
			p2 = element("p");
			t9 = text("Year");
			t10 = space();
			section0 = element("section");
			div7 = element("div");
			t11 = space();
			div8 = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t12 = space();
			header1 = element("header");
			div12 = element("div");
			div9 = element("div");
			p3 = element("p");
			t13 = text("Experience");
			t14 = space();
			div10 = element("div");
			p4 = element("p");
			t15 = text("Title");
			t16 = space();
			div11 = element("div");
			p5 = element("p");
			t17 = text("Year");
			t18 = space();
			section1 = element("section");
			div13 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t19 = space();
			div18 = element("div");
			div14 = element("div");
			p6 = element("p");
			t20 = text("Ottawa – ");
			t21 = text(/*time*/ ctx[2]);
			t22 = text(" ET");
			t23 = space();
			div17 = element("div");
			div15 = element("div");
			p7 = element("p");
			t24 = text("Updated 05/2021");
			t25 = space();
			div16 = element("div");
			p8 = element("p");
			t26 = text("© 2011 – ");
			t27 = text(/*year*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-7gwmg8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div19 = claim_element(nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div0 = claim_element(div19_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(div19_nodes);
			header0 = claim_element(div19_nodes, "HEADER", { class: true });
			var header0_nodes = children(header0);
			div2 = claim_element(header0_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a = claim_element(div2_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t2 = claim_text(a_nodes, "Maxim Siebert");
			a_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(header0_nodes);
			div6 = claim_element(header0_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p0 = claim_element(div3_nodes, "P", {});
			var p0_nodes = children(p0);
			t5 = claim_text(p0_nodes, "Project");
			p0_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p1 = claim_element(div4_nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Role");
			p1_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t8 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p2 = claim_element(div5_nodes, "P", {});
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Year");
			p2_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			header0_nodes.forEach(detach_dev);
			t10 = claim_space(div19_nodes);
			section0 = claim_element(div19_nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			div7 = claim_element(section0_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div7_nodes.forEach(detach_dev);
			t11 = claim_space(section0_nodes);
			div8 = claim_element(section0_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div8_nodes);
			}

			div8_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t12 = claim_space(div19_nodes);
			header1 = claim_element(div19_nodes, "HEADER", { class: true });
			var header1_nodes = children(header1);
			div12 = claim_element(header1_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div9 = claim_element(div12_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p3 = claim_element(div9_nodes, "P", {});
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "Experience");
			p3_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t14 = claim_space(div12_nodes);
			div10 = claim_element(div12_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p4 = claim_element(div10_nodes, "P", {});
			var p4_nodes = children(p4);
			t15 = claim_text(p4_nodes, "Title");
			p4_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			t16 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			p5 = claim_element(div11_nodes, "P", {});
			var p5_nodes = children(p5);
			t17 = claim_text(p5_nodes, "Year");
			p5_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			header1_nodes.forEach(detach_dev);
			t18 = claim_space(div19_nodes);
			section1 = claim_element(div19_nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);
			div13 = claim_element(section1_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div13_nodes);
			}

			div13_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t19 = claim_space(div19_nodes);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);
			div14 = claim_element(div18_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			p6 = claim_element(div14_nodes, "P", {});
			var p6_nodes = children(p6);
			t20 = claim_text(p6_nodes, "Ottawa – ");
			t21 = claim_text(p6_nodes, /*time*/ ctx[2]);
			t22 = claim_text(p6_nodes, " ET");
			p6_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			t23 = claim_space(div18_nodes);
			div17 = claim_element(div18_nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			div15 = claim_element(div17_nodes, "DIV", { class: true });
			var div15_nodes = children(div15);
			p7 = claim_element(div15_nodes, "P", {});
			var p7_nodes = children(p7);
			t24 = claim_text(p7_nodes, "Updated 05/2021");
			p7_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			t25 = claim_space(div17_nodes);
			div16 = claim_element(div17_nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			p8 = claim_element(div16_nodes, "P", {});
			var p8_nodes = children(p8);
			t26 = claim_text(p8_nodes, "© 2011 – ");
			t27 = claim_text(p8_nodes, /*year*/ ctx[3]);
			p8_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			div17_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Maxim Siebert";
			attr_dev(div0, "class", "px-4 mb-8 loader");
			add_location(div0, file, 56, 1, 1929);
			attr_dev(a, "href", "/");
			attr_dev(a, "class", "inline-block mb-2 hover:underline md:mb-0");
			add_location(a, file, 59, 3, 2058);
			attr_dev(div1, "class", "block text-gray-600 dark:text-gray-400 md:hidden");
			add_location(div1, file, 60, 3, 2141);
			attr_dev(div2, "class", "w-full px-4 mb-8 md:w-3/12 md:mb-0");
			add_location(div2, file, 58, 2, 2006);
			add_location(p0, file, 66, 4, 2326);
			attr_dev(div3, "class", "w-4/12 px-4");
			add_location(div3, file, 65, 3, 2296);
			add_location(p1, file, 69, 4, 2400);
			attr_dev(div4, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div4, file, 68, 3, 2354);
			add_location(p2, file, 72, 4, 2482);
			attr_dev(div5, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
			add_location(div5, file, 71, 3, 2425);
			attr_dev(div6, "class", "flex w-full ml-auto md:w-8/12");
			add_location(div6, file, 64, 2, 2249);
			attr_dev(header0, "class", "flex flex-wrap mb-2");
			add_location(header0, file, 57, 1, 1967);
			attr_dev(div7, "class", "hidden w-3/12 px-4 text-gray-600 dark:text-gray-400 md:block");
			add_location(div7, file, 77, 2, 2574);
			attr_dev(div8, "class", "w-full ml-auto md:w-8/12");
			add_location(div8, file, 80, 2, 2683);
			attr_dev(section0, "class", "flex flex-wrap mb-8 md:mb-12");
			add_location(section0, file, 76, 1, 2525);
			add_location(p3, file, 99, 4, 3344);
			attr_dev(div9, "class", "w-4/12 px-4");
			add_location(div9, file, 98, 3, 3314);
			add_location(p4, file, 102, 4, 3421);
			attr_dev(div10, "class", "hidden w-4/12 px-4 sm:block");
			add_location(div10, file, 101, 3, 3375);
			add_location(p5, file, 105, 4, 3504);
			attr_dev(div11, "class", "flex justify-end w-8/12 px-4 sm:w-4/12");
			add_location(div11, file, 104, 3, 3447);
			attr_dev(div12, "class", "flex w-full ml-auto md:w-8/12");
			add_location(div12, file, 97, 2, 3267);
			attr_dev(header1, "class", "flex mb-2");
			add_location(header1, file, 96, 1, 3238);
			attr_dev(div13, "class", "w-full ml-auto md:w-8/12");
			add_location(div13, file, 110, 2, 3582);
			attr_dev(section1, "class", "flex flex-wrap");
			add_location(section1, file, 109, 1, 3547);
			add_location(p6, file, 128, 3, 4270);
			attr_dev(div14, "class", "w-8/12 px-4 sm:w-3/12");
			add_location(div14, file, 127, 2, 4231);
			add_location(p7, file, 132, 4, 4400);
			attr_dev(div15, "class", "hidden w-8/12 px-4 sm:block");
			add_location(div15, file, 131, 3, 4354);
			add_location(p8, file, 135, 4, 4493);
			attr_dev(div16, "class", "flex justify-end w-full px-4 sm:w-4/12");
			add_location(div16, file, 134, 3, 4436);
			attr_dev(div17, "class", "flex w-4/12 ml-auto sm:w-8/12");
			add_location(div17, file, 130, 2, 4307);
			attr_dev(div18, "class", "flex pt-8 mt-auto text-gray-600 md:pt-12 dark:text-gray-400");
			add_location(div18, file, 126, 1, 4155);
			attr_dev(div19, "class", "flex flex-col min-h-screen py-4 text-xs bg-gray-100 lg:py-8 lg:px-4 dark:bg-black dark:text-white");
			add_location(div19, file, 55, 0, 1816);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div19, anchor);
			append_dev(div19, div0);
			append_dev(div19, t1);
			append_dev(div19, header0);
			append_dev(header0, div2);
			append_dev(div2, a);
			append_dev(a, t2);
			append_dev(div2, t3);
			append_dev(div2, div1);
			div1.innerHTML = /*description*/ ctx[4];
			append_dev(header0, t4);
			append_dev(header0, div6);
			append_dev(div6, div3);
			append_dev(div3, p0);
			append_dev(p0, t5);
			append_dev(div6, t6);
			append_dev(div6, div4);
			append_dev(div4, p1);
			append_dev(p1, t7);
			append_dev(div6, t8);
			append_dev(div6, div5);
			append_dev(div5, p2);
			append_dev(p2, t9);
			append_dev(div19, t10);
			append_dev(div19, section0);
			append_dev(section0, div7);
			div7.innerHTML = /*description*/ ctx[4];
			append_dev(section0, t11);
			append_dev(section0, div8);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div8, null);
			}

			append_dev(div19, t12);
			append_dev(div19, header1);
			append_dev(header1, div12);
			append_dev(div12, div9);
			append_dev(div9, p3);
			append_dev(p3, t13);
			append_dev(div12, t14);
			append_dev(div12, div10);
			append_dev(div10, p4);
			append_dev(p4, t15);
			append_dev(div12, t16);
			append_dev(div12, div11);
			append_dev(div11, p5);
			append_dev(p5, t17);
			append_dev(div19, t18);
			append_dev(div19, section1);
			append_dev(section1, div13);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div13, null);
			}

			append_dev(div19, t19);
			append_dev(div19, div18);
			append_dev(div18, div14);
			append_dev(div14, p6);
			append_dev(p6, t20);
			append_dev(p6, t21);
			append_dev(p6, t22);
			append_dev(div18, t23);
			append_dev(div18, div17);
			append_dev(div17, div15);
			append_dev(div15, p7);
			append_dev(p7, t24);
			append_dev(div17, t25);
			append_dev(div17, div16);
			append_dev(div16, p8);
			append_dev(p8, t26);
			append_dev(p8, t27);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*projects*/ 1) {
				each_value_1 = /*projects*/ ctx[0];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div8, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*experiences*/ 2) {
				each_value = /*experiences*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div13, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*time*/ 4) set_data_dev(t21, /*time*/ ctx[2]);
			if (dirty & /*year*/ 8) set_data_dev(t27, /*year*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div19);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params, query }) {
	const getProjects = await this.fetch(`content/projects.json`);
	const projects = await getProjects.json();
	const getExperiences = await this.fetch(`content/experiences.json`);
	const experiences = await getExperiences.json();
	return { projects, experiences };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { projects } = $$props;
	let { experiences } = $$props;
	var time = "";
	var year = "";
	let description = "is a French Canadian Designer & Developer. He's currently a Principal Designer at <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Peggy</a> and freelances through his studio <a href=\"https://blunt.af/\" class=\"hover:text-black dark:hover:text-white hover:underline\" target=\"_blank\" rel=\"noreferrer noopener\">Blunt</a>. This site lists most of the work he's done over the years, if you'd like to discuss new commissions or collaborate with Maxim email him at <a href=\"mailto:maxim@hey.com\" class=\"hover:text-black dark:hover:text-white hover:underline\">maxim@hey.com</a>.";

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
		$$invalidate(2, time = hour + sep + minutes + " " + ampm);

		$$invalidate(3, year = now.getFullYear());

		// call this function again in 1000ms
		setTimeout(updateClock, 1000);
	}

	updateClock();
	const writable_props = ["projects", "experiences"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
		if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
	};

	$$self.$capture_state = () => ({
		preload,
		projects,
		experiences,
		time,
		year,
		description,
		updateClock
	});

	$$self.$inject_state = $$props => {
		if ("projects" in $$props) $$invalidate(0, projects = $$props.projects);
		if ("experiences" in $$props) $$invalidate(1, experiences = $$props.experiences);
		if ("time" in $$props) $$invalidate(2, time = $$props.time);
		if ("year" in $$props) $$invalidate(3, year = $$props.year);
		if ("description" in $$props) $$invalidate(4, description = $$props.description);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [projects, experiences, time, year, description];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { projects: 0, experiences: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*projects*/ ctx[0] === undefined && !("projects" in props)) {
			console.warn("<Routes> was created without expected prop 'projects'");
		}

		if (/*experiences*/ ctx[1] === undefined && !("experiences" in props)) {
			console.warn("<Routes> was created without expected prop 'experiences'");
		}
	}

	get projects() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projects(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get experiences() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set experiences(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDNlNWY2MmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXG5cdFx0Y29uc3QgZ2V0UHJvamVjdHMgPSBhd2FpdCB0aGlzLmZldGNoKGBjb250ZW50L3Byb2plY3RzLmpzb25gKTtcblx0XHRjb25zdCBwcm9qZWN0cyA9IGF3YWl0IGdldFByb2plY3RzLmpzb24oKTtcblxuXHRcdGNvbnN0IGdldEV4cGVyaWVuY2VzID0gYXdhaXQgdGhpcy5mZXRjaChgY29udGVudC9leHBlcmllbmNlcy5qc29uYCk7XG5cdFx0Y29uc3QgZXhwZXJpZW5jZXMgPSBhd2FpdCBnZXRFeHBlcmllbmNlcy5qc29uKCk7XG5cblx0XHRyZXR1cm4geyBwcm9qZWN0cywgZXhwZXJpZW5jZXMgIH1cblxuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBwcm9qZWN0cztcblx0ZXhwb3J0IGxldCBleHBlcmllbmNlcztcblxuXHR2YXIgdGltZSA9ICcnO1xuXHR2YXIgeWVhciA9ICcnO1xuXG5cdGxldCBkZXNjcmlwdGlvbiA9IFwiaXMgYSBGcmVuY2ggQ2FuYWRpYW4gRGVzaWduZXIgJiBEZXZlbG9wZXIuIEhlJ3MgY3VycmVudGx5IGEgUHJpbmNpcGFsIERlc2lnbmVyIGF0IDxhIGhyZWY9XFxcImh0dHBzOi8vYmx1bnQuYWYvXFxcIiBjbGFzcz1cXFwiaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub3JlZmVycmVyIG5vb3BlbmVyXFxcIj5QZWdneTwvYT4gYW5kIGZyZWVsYW5jZXMgdGhyb3VnaCBoaXMgc3R1ZGlvIDxhIGhyZWY9XFxcImh0dHBzOi8vYmx1bnQuYWYvXFxcIiBjbGFzcz1cXFwiaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub3JlZmVycmVyIG5vb3BlbmVyXFxcIj5CbHVudDwvYT4uIFRoaXMgc2l0ZSBsaXN0cyBtb3N0IG9mIHRoZSB3b3JrIGhlJ3MgZG9uZSBvdmVyIHRoZSB5ZWFycywgaWYgeW91J2QgbGlrZSB0byBkaXNjdXNzIG5ldyBjb21taXNzaW9ucyBvciBjb2xsYWJvcmF0ZSB3aXRoIE1heGltIGVtYWlsIGhpbSBhdCA8YSBocmVmPVxcXCJtYWlsdG86bWF4aW1AaGV5LmNvbVxcXCIgY2xhc3M9XFxcImhvdmVyOnRleHQtYmxhY2sgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVxcXCI+bWF4aW1AaGV5LmNvbTwvYT4uXCJcblx0XG5cdGZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xuXHRcdHZhciBub3cgPSBuZXcgRGF0ZSgpLCAvLyBjdXJyZW50IGRhdGVcblx0XHRcdGhvdXIgPSBub3cuZ2V0SG91cnMoKSxcblx0XHRcdG1pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpLFxuXHRcdFx0c2VwID0gJzonLFxuXHRcdFx0YW1wbSA9ICdhbSc7XG5cdFx0XG5cdFx0aWYgKGhvdXIgPj0gMTIpIHtcblx0XHRcdFx0aG91ciAtPSAxMjtcblx0XHRcdFx0YW1wbSA9ICdwbSc7XG5cdFx0fVxuXHRcdFx0XHRcblx0XHRtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnICsgbWludXRlcyA6IG1pbnV0ZXM7XG5cdFx0aG91ciA9IGhvdXIgJSAxMjtcblx0XHRob3VyID0gaG91ciA/IGhvdXIgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cblx0XHQvLyBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQgd2l0aCB0aGUgSUQgdGltZSB0byB0aGUgZm9ybWF0dGVkIHN0cmluZ1xuXHRcdHRpbWUgPSBob3VyICsgc2VwICsgbWludXRlcyArICcgJyArIGFtcG07XG5cdFx0eWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuXG5cdFx0Ly8gY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIGluIDEwMDBtc1xuXHRcdHNldFRpbWVvdXQodXBkYXRlQ2xvY2ssIDEwMDApO1xuXG5cdH1cblxuXHR1cGRhdGVDbG9jaygpO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPk1heGltIFNpZWJlcnQ8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIHB5LTQgdGV4dC14cyBiZy1ncmF5LTEwMCBsZzpweS04IGxnOnB4LTQgZGFyazpiZy1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cblx0PGRpdiBjbGFzcz1cInB4LTQgbWItOCBsb2FkZXJcIj48L2Rpdj5cblx0PGhlYWRlciBjbGFzcz1cImZsZXggZmxleC13cmFwIG1iLTJcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIHB4LTQgbWItOCBtZDp3LTMvMTIgbWQ6bWItMFwiPlxuXHRcdFx0PGEgaHJlZj1cIi9cIiBjbGFzcz1cImlubGluZS1ibG9jayBtYi0yIGhvdmVyOnVuZGVybGluZSBtZDptYi0wXCI+TWF4aW0gU2llYmVydDwvYT5cblx0XHRcdDxkaXYgY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBtZDpoaWRkZW5cIj5cblx0XHRcdFx0e0BodG1sIGRlc2NyaXB0aW9ufVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImZsZXggdy1mdWxsIG1sLWF1dG8gbWQ6dy04LzEyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidy00LzEyIHB4LTRcIj5cblx0XHRcdFx0PHA+UHJvamVjdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTQvMTIgcHgtNCBzbTpibG9ja1wiPlxuXHRcdFx0XHQ8cD5Sb2xlPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LTgvMTIgcHgtNCBzbTp3LTQvMTJcIj5cblx0XHRcdFx0PHA+WWVhcjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2hlYWRlcj5cblx0PHNlY3Rpb24gY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBtYi04IG1kOm1iLTEyXCI+XG5cdFx0PGRpdiBjbGFzcz1cImhpZGRlbiB3LTMvMTIgcHgtNCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBtZDpibG9ja1wiPlxuXHRcdFx0e0BodG1sIGRlc2NyaXB0aW9ufVxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWwtYXV0byBtZDp3LTgvMTJcIj5cblx0XHRcdHsjZWFjaCBwcm9qZWN0cyBhcyBwcm9qZWN0fVxuXHRcdFx0XHQ8YSBjbGFzcz1cImZsZXggYmxvY2sgbWwtYXV0byB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTQwMCBob3Zlcjp1bmRlcmxpbmUgaG92ZXI6dGV4dC1ibGFjayBkYXJrOmhvdmVyOnRleHQtd2hpdGVcIiBocmVmPVwie3Byb2plY3QudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy00LzEyIHB4LTRcIj5cblx0XHRcdFx0XHRcdDxwPntwcm9qZWN0LnRpdGxlfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGlkZGVuIHctNC8xMiBweC00IHNtOmJsb2NrXCI+XG5cdFx0XHRcdFx0XHQ8cD57cHJvamVjdC5yb2xlfTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LTgvMTIgcHgtNCBzbTp3LTQvMTJcIj5cblx0XHRcdFx0XHRcdDxwPntwcm9qZWN0LnllYXJ9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHR7L2VhY2h9XG5cdFx0PC9kaXY+XG5cdDwvc2VjdGlvbj5cblx0PGhlYWRlciBjbGFzcz1cImZsZXggbWItMlwiPlxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbCBtbC1hdXRvIG1kOnctOC8xMlwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInctNC8xMiBweC00XCI+XG5cdFx0XHRcdDxwPkV4cGVyaWVuY2U8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoaWRkZW4gdy00LzEyIHB4LTQgc206YmxvY2tcIj5cblx0XHRcdFx0PHA+VGl0bGU8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctOC8xMiBweC00IHNtOnctNC8xMlwiPlxuXHRcdFx0XHQ8cD5ZZWFyPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvaGVhZGVyPlxuXHQ8c2VjdGlvbiBjbGFzcz1cImZsZXggZmxleC13cmFwXCI+XG5cdFx0PGRpdiBjbGFzcz1cInctZnVsbCBtbC1hdXRvIG1kOnctOC8xMlwiPlxuXHRcdFx0eyNlYWNoIGV4cGVyaWVuY2VzIGFzIGV4cGVyaWVuY2V9XG5cdFx0XHRcdDxhIGNsYXNzPVwiZmxleCBibG9jayBtbC1hdXRvIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LWJsYWNrIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiIGhyZWY9XCJ7ZXhwZXJpZW5jZS51cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTQvMTIgcHgtNFwiPlxuXHRcdFx0XHRcdFx0PHA+e2V4cGVyaWVuY2UudGl0bGV9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoaWRkZW4gdy00LzEyIHB4LTQgc206YmxvY2tcIj5cblx0XHRcdFx0XHRcdDxwPntleHBlcmllbmNlLnJvbGV9PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHctOC8xMiBweC00IHNtOnctNC8xMlwiPlxuXHRcdFx0XHRcdFx0PHA+e2V4cGVyaWVuY2UuZGF0ZX08L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYT5cblx0XHRcdHsvZWFjaH1cblx0XHQ8L2Rpdj5cblx0PC9zZWN0aW9uPlxuXHQ8ZGl2IGNsYXNzPVwiZmxleCBwdC04IG10LWF1dG8gdGV4dC1ncmF5LTYwMCBtZDpwdC0xMiBkYXJrOnRleHQtZ3JheS00MDBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwidy04LzEyIHB4LTQgc206dy0zLzEyXCI+XG5cdFx0XHQ8cD5PdHRhd2Eg4oCTIHt0aW1lfSBFVDwvcD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCB3LTQvMTIgbWwtYXV0byBzbTp3LTgvMTJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoaWRkZW4gdy04LzEyIHB4LTQgc206YmxvY2tcIj5cblx0XHRcdFx0PHA+VXBkYXRlZCAwNS8yMDIxPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCB3LWZ1bGwgcHgtNCBzbTp3LTQvMTJcIj5cblx0XHRcdFx0PHA+wqkgMjAxMSDigJMge3llYXJ9PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+XG5cbjwhLS0geyNlYWNoIHByb2plY3RzIGFzIHByb2plY3R9XG5cdHtwcm9qZWN0LnRpdGxlfVxuXHR7cHJvamVjdC5yb2xlfVxuXHR7cHJvamVjdC55ZWFyfVxuXHR7cHJvamVjdC51cmx9XG5cdDxicj5cbnsvZWFjaH0gLS0+Il0sIm5hbWVzIjpb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
