
        var _state = {

          // animation_status: "active",
          animation_status: "not_active",

        };

        _state.operation_state = {};
        _state.model = {

          active_page_name: "shop",
          // active_page_name: "database",

          shop_model: {
            
          }

        };

        _state.animation_script = [

          [ "mouse_go_to", 0, 0 ],
          [ "wait", 200 ],
          [ "mouse_go_to", 500, 500 ],
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
          [ "wait", 700 ],
          [ "mouse_go_to", 1690, 350 ],
          [ "wait", 500 ],
          [ "add_class", "#chromane_iframe_container", "active" ]

        ];

        var operations = {

          wait: function ( op_data, op_state ) {

            return new Promise( function ( resolve ) {

              setTimeout( resolve, op_data[ 1 ] );

            });

          },

          mouse_go_to: ( op_data, op_state ) => {

            console.log( op_data, op_state );

            document.querySelector( ".mouse_container" ).style.left = op_data[ 1 ] + "px";
            document.querySelector( ".mouse_container" ).style.top = op_data[ 2 ] + "px";

          },

          text_input_add_letter: ( op_data, op_state ) => {

            document.querySelector( "input" ).value = document.querySelector( "input" ).value + "S";

          },

          add_class: ( op_data, op_state ) => {

            document.querySelector( op_data[ 1 ] ).classList.add( op_data[ 2 ] );

          },

        };

        async function exec_operations ( op_data_arr ) {

          for ( var i = 0; i < op_data_arr.length; i++ ) {

            console.log( op_data_arr[ i ] );

            await operations[ op_data_arr[ i ][ 0 ] ]( op_data_arr[ i ], _state.operation_state );

          };

        }

        if ( _state.animation_status === "active" ) {

          exec_operations( _state.animation_script );

        };

        new Vue({

          el: "#desktop",

          data: {

            model: _state.model,

          },

          methods: {
          },

        });
