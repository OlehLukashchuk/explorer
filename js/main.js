var _state = {
  // animation_status: "active",
  animation_status: "not_active",
};

_state.operation_state = {};
_state.model = {
  active_page_name: "shop",
  // active_page_name: "database",

  shop_model: {
    section_style: {
      left: "0%",
    },
    section_index: 0,

    form_item_arr: [
      {
        type: "text",
      },
      {
        type: "text",
      },
      {
        type: "text",
      },
      {
        type: "text",
      },
      {
        type: "date",
      },
      {
        type: "toggle",
      },
      {
        type: "text",
      },
      {
        type: "text",
      },
      {
        type: "text",
      },
    ],
    price_selector_arr: [
      {
        index: 0,
      },
      {
        index: 1,
      },
      {
        index: 2,
      },
    ],
    aside_nav_arr: [
      {
        text: "house",
      },
      {
        text: "local_grocery_store_outlined_icon",
        color: "#0cd493",
      },
      {
        text: "keyboard",
      },
      {
        text: "person",
      },
      {
        text: "trending_up",
      },
      {
        text: "notifications_active_icon",
      },
    ],
    table_rows_quantity: [
      {
        index: 0,
        order: "#10001",
        date: "Oct 6, 7:27 pm",
        customer: "John Crichton",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 1,
        order: "#10002",
        date: "Oct 6, 7:27 pm",
        customer: "Cameron Mitchell",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 2,
        order: "#10003",
        date: "Oct 6, 7:27 pm",
        customer: "Jack Beaver",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 3,
        order: "#10004",
        date: "Oct 6, 7:27 pm",
        customer: "Jon Snow",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 4,
        order: "#10005",
        date: "Oct 6, 7:27 pm",
        customer: "John Crichton",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 5,
        order: "#10006",
        date: "Oct 6, 7:27 pm",
        customer: "Jon Snow",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 6,
        order: "#10007",
        date: "Oct 6, 7:27 pm",
        customer: "Cameron Mitchell",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 7,
        order: "#10008",
        date: "Oct 6, 7:27 pm",
        customer: "Jack Beaver",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
      {
        index: 8,
        order: "#10009",
        date: "Oct 6, 7:27 pm",
        customer: "Jon Snow",
        paymentStatus: "Paid",
        fulfillStatus: "Fulfilled",
      },
    ],
    wine_info_arr: [
      {
        category: "Name",
        text: "Cuvee La Rossa",
      },
      {
        category: "ABV",
        text: "11%",
      },
      {
        category: "Calories",
        text: "75g",
      },
      {
        category: "Sugars",
        text: "0g",
      },
      {
        category: "Price",
        text: "11.99$",
      },
    ],
    cheese_info_arr: [
      {
        category: "Name",
        text: "Gorgonzola",
      },
      {
        category: "Milk type",
        text: "Cow",
      },
      {
        category: "Region",
        text: "Italy",
      },
      {
        category: "Calories",
        text: "100g",
      },
      {
        category: "Price",
        text: "9.99$",
      },
    ],
    cheese_info_arr: [
      {
        category: "Name",
        text: "Andrew",
      },
      {
        category: "Age",
        text: "25",
      },
      {
        category: "Address",
        text: "Some street",
      },
    ],
  },
};

_state.animation_script = [
  ["mouse_go_to", 0, 0],
  ["wait", 200],
  ["mouse_go_to", 500, 500],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "text_input_add_letter" ],
  // [ "wait", 500 ],
  // [ "mouse_go_to", 500, 600 ],
  ["wait", 700],
  ["mouse_go_to", 1690, 350],
  ["wait", 500],
  ["add_class", "#chromane_iframe_container", "active"],
];

var operations = {
  wait: function (op_data, op_state) {
    return new Promise(function (resolve) {
      setTimeout(resolve, op_data[1]);
    });
  },

  mouse_go_to: (op_data, op_state) => {
    console.log(op_data, op_state);

    document.querySelector(".mouse_container").style.left = op_data[1] + "px";
    document.querySelector(".mouse_container").style.top = op_data[2] + "px";
  },

  text_input_add_letter: (op_data, op_state) => {
    document.querySelector("input").value =
      document.querySelector("input").value + "S";
  },

  add_class: (op_data, op_state) => {
    document.querySelector(op_data[1]).classList.add(op_data[2]);
  },
};

async function exec_operations(op_data_arr) {
  for (var i = 0; i < op_data_arr.length; i++) {
    console.log(op_data_arr[i]);

    await operations[op_data_arr[i][0]](op_data_arr[i], _state.operation_state);
  }
}

if (_state.animation_status === "active") {
  exec_operations(_state.animation_script);
}

_state.vm = new Vue({
  el: "#desktop",

  data: {
    model: _state.model,
  },

  methods: {
    update: function () {
      _state.model.shop_model.section_style = this.get_section_style(
        _state.model
      );
    },

    get_section_style: (model) => {
      var style = {};

      style.left = -model.shop_model.section_index * 100 + "%";

      return style;
    },
  },
});

_state.vm.update();
