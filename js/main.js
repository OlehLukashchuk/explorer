var _state = {
  // animation_status: "active",
  animation_status: "not_active",
};

_state.operation_state = {};
_state.model = {
  // active_page_name: "shop",
  active_page_name: "database",

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
    aside_nav_arr:[
      {
        text: 'house',
        color : '#307ff7'
      },
      {
        text: 'local_grocery_store_outlined_icon',
        color : '#a2c1f2'
      },
      {
        text: 'keyboard',
        color : '#f2be87'
      },
      {
        text: 'person',
        color : '#307ff7'
      },
      {
        text: 'trending_up',
        color : '#f2be87'
      },
      {
        text: 'notifications_active_icon',
        color : '#a2c1f2'
      },
    ],
    table_rows_quantity: [
      {
        index:0
      },
      {
        index:1
      },
      {
        index:2
      },
      {
        index:3
      },
      {
        index:4
      },
      {
        index:5
      },
    ]
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
