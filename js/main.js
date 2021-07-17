
        var _state = {

          // animation_status: "active",
          animation_status: "not_active",

        };

        _state.operation_state = {};
        _state.model = {



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

        // new Vue({

        //   el: ".vlas_container",

        //   data: {

        //     model: _state.model,

        //   },

        //   methods: {



        //     set_interval: function () {

        //       this.interval = setInterval( () => {

        //         this.time_text = moment.utc( this.end_ts - Date.now() ).format( "HH:mm:ss" );

        //         this.percent_done = 100 *( this.end_ts - Date.now() ) / ( this.session_time * 60 * 1000 ) 

        //         if ( Date.now() > this.end_ts ) {

        //           clearInterval( this.interval );
        //           this.active_page_name = "finished";

        //         };

        //       }, 100 );

        //     },

        //     button_click: function ( name, detail ) {

        //       if ( name === "start_again" ) {

        //         this.active_page_name = "select_minutes";

        //         this.start_ts = 0;
        //         this.end_ts = 0;

        //         chrome.storage.local.set({

        //           start_ts: this.start_ts,
        //           end_ts: this.end_ts,

        //         });

        //       } else if ( name === "set_session_time" ) {

        //         this.session_time = detail;

        //       } else if ( name === "start_timer" ) {

        //         this.session_time = parseInt( this.session_time );
        //         this.timer_is_active = true;
        //         this.active_page_name = "progress";

        //         this.start_ts = Date.now();
        //         this.end_ts = this.start_ts + this.session_time * 60 * 1000;

        //         this.set_interval();

        //         chrome.storage.local.set({

        //           start_ts: this.start_ts,
        //           end_ts: this.end_ts,
        //           session_time: this.session_time,

        //         }, () => {

        //           chrome.runtime.sendMessage({

        //             name: "start_timer_click",
        //             data: {
        //               start_ts: this.start_ts,
        //               end_ts: this.end_ts,
        //               session_time: this.session_time,
        //             }

        //           });

        //         });

        //       } else if ( name === "stop_timer" ) {

        //         this.active_page_name = "select_minutes";

        //         chrome.storage.local.set({

        //           start_ts: 0,
        //           end_ts: 0,

        //         }, () => {

        //           chrome.runtime.sendMessage({ name: "stop_timer_click" });

        //         });

        //       } else if ( name === "menu_button" ) {

        //         this.open_drawer();

        //       } else if ( name === "close" ) {

        //         window.close();

        //       };

        //     },

        //     // drawer methods

        //       open_drawer: async function () {

        //         document.querySelector( "#drawer_overlay" ).style.display = "block";

        //         await this.wait( 10 );

        //         document.querySelector( "#drawer_overlay" ).classList.add( "opened" );

        //       },

        //       close_drawer: async function () {

        //         document.querySelector( "#drawer_overlay" ).classList.remove( "opened" );

        //         await this.wait( 200 );

        //         document.querySelector( "#drawer_overlay" ).style.display = "none";

        //       },

        //       drawer_overlay_click: function () {

        //         this.close_drawer();

        //       },

        //       drawer_click: function ( event ) {

        //         event.stopPropagation();

        //       },

        //       drawer_item_click: function ( item_name ) {

        //         if ( item_name === "log_out" ) {

        //           firebase.auth().signOut().then(() => {

        //             this.auth_model = {};

        //             this.app_info.nav_info.page_name = "my_account";

        //             this.app_info.auth_data.user_is_logged_in = false;
        //             this.app_info.auth_data.user_is_upgraded = false;

        //             this.emit( "sync_data", { auth_data: this.app_info.auth_data } );

        //             this.update_model();

        //           }, function ( error ) {} );

        //         } else if ( item_name === "how_to_use_it" ) {

        //           chrome.tabs.create({

        //             url: "https://youtu.be/UWE6Q_3z-UM",
        //             active: true,

        //           });

        //         };

        //         this.emit( "drawer_item_click", { item_name });

        //         if ( item_name === "license" ) {

        //           this.app_info.nav_info.page_name = "license";

        //         } else if ( item_name === "main_page" ) {

        //           this.app_info.nav_info.page_name = "main";

        //         } else if ( item_name === "settings" ) {

        //           this.app_info.nav_info.page_name = "settings";

        //         } else if ( item_name === "my_account" ) {

        //           this.app_info.nav_info.page_name = "my_account";

        //         };

        //         this.close_drawer();
        //         this.update_model();

        //       },

        //   },

        //   watch: {

        //     session_time: function () {

        //       if ( this.session_time > 1440 ) {

        //         this.session_time = 1440;

        //       } else if ( this.session_time < 1 ) {

        //         this.session_time = 1;

        //       };

        //       this.session_time = parseInt( this.session_time );

        //     }

        //   },

        //   created: function () {

        //     chrome.storage.local.get( null, ( storage ) => {

        //       console.log( storage );

        //       if ( storage.session_time ) {

        //         this.session_time = parseInt( storage.session_time );

        //       };

        //       if ( storage.start_ts ) {

        //         this.start_ts = storage.start_ts;
        //         this.end_ts = storage.end_ts;

        //         if ( Date.now() > this.end_ts ) {

        //           this.active_page_name = "finished";

        //         } else {

        //           this.active_page_name = "progress";
        //           this.set_interval();

        //         };

        //       };

        //     });

        //   },

        // });
