$(document).ready(function () {

    /*  from palette_scripts.js ON  */
    if ($("#p_primary_img").length !== 0) {
        window.process_popup = false;
        window.process_popup_addition = false;
        window.point_max_offset = 10;
        window.canvas_width = $("#p_primary_img").width();
        $("#p_draw_ceil").attr({ "width": $("#p_primary_img").width(), "height": $("#p_primary_img").height() });
        window.p_canvas = document.getElementById("p_draw_ceil");
        window.ctx = window.p_canvas.getContext('2d');
        window.ctx.fillStyle = "#FFA500";
        window.ctx.strokeStyle = "#FFA500";
        window.p_canvas_points = new Array();
        window.p_canvas_closed = false;
        window.p_canvas_edit = "open";
        var colors_palitre = [{ 'color': '73d0d7', 'name': '100' }, { 'color': 'b7cde4', 'name': '102' }, { 'color': '71b0cf', 'name': '104' }, { 'color': '3399c1', 'name': '108' }, { 'color': 'accee7', 'name': '110' }, { 'color': '09a0e9', 'name': '114' }, { 'color': '0197d2', 'name': '120' }, { 'color': '0b66b7', 'name': '140' }, { 'color': '0147c0', 'name': '156' }, { 'color': '000da9', 'name': '160' }, { 'color': '06368a', 'name': '162' }, { 'color': '0d387d', 'name': '180' }, { 'color': '254166', 'name': '184' }, { 'color': 'b9cced', 'name': '201' }, { 'color': '788ab2', 'name': '205' }, { 'color': 'd34180', 'name': '215' }, { 'color': '867acc', 'name': '223' }, { 'color': 'ac94e2', 'name': '225' }, { 'color': '89478e', 'name': '227' }, { 'color': '9963b9', 'name': '229' }, { 'color': '803472', 'name': '231' }, { 'color': '0d387d', 'name': '233' }, { 'color': '801d53', 'name': '235' }, { 'color': 'f6fafd', 'name': '303' }, { 'color': 'edf0f3', 'name': '305' }, { 'color': 'd6cebb', 'name': '307' }, { 'color': 'c8c9c3', 'name': '309' }, { 'color': 'bec3bf', 'name': '311' }, { 'color': '90a7b5', 'name': '313' }, { 'color': '4c6a75', 'name': '315' }, { 'color': 'a1a6a0', 'name': '317' }, { 'color': '73878e', 'name': '319' }, { 'color': '53666c', 'name': '333' }, { 'color': '0a0e0f', 'name': '347' }, { 'color': 'fde5e5', 'name': '400' }, { 'color': 'f28eb0', 'name': '402' }, { 'color': 'ffceee', 'name': '404' }, { 'color': 'dea882', 'name': '406' }, { 'color': 'd67f78', 'name': '408' }, { 'color': 'b85d4a', 'name': '410' }, { 'color': 'feb3ec', 'name': '412' }, { 'color': 'd07c8c', 'name': '416' }, { 'color': 'e60b11', 'name': '420' }, { 'color': 'ff1888', 'name': '436' }, { 'color': 'f826a1', 'name': '442' }, { 'color': 'd50b79', 'name': '444' }, { 'color': 'd30835', 'name': '462' }, { 'color': 'db3b55', 'name': '466' }, { 'color': 'a82159', 'name': '474' }, { 'color': '9a1737', 'name': '476' }, { 'color': '70253c', 'name': '478' }, { 'color': '581d2f', 'name': '490' }, { 'color': 'efeed9', 'name': '501' }, { 'color': 'ece6c4', 'name': '507' }, { 'color': 'daba7d', 'name': '511' }, { 'color': 'b0b481', 'name': '515' }, { 'color': 'aea07d', 'name': '519' }, { 'color': '945e46', 'name': '525' }, { 'color': 'a56b21', 'name': '545' }, { 'color': '8f3c2e', 'name': '574' }, { 'color': '67423c', 'name': '555' }, { 'color': '533831', 'name': '571' }, { 'color': '894e2c', 'name': '753' }, { 'color': '4e3b3d', 'name': '577' }, { 'color': 'f0f6e8', 'name': '600' }, { 'color': 'e5f5da', 'name': '602' }, { 'color': 'c3e6e8', 'name': '604' }, { 'color': '8fe0e3', 'name': '606' }, { 'color': '1fd8d3', 'name': '608' }, { 'color': '6ea496', 'name': '610' }, { 'color': '739266', 'name': '614' }, { 'color': 'a6d4e7', 'name': '618' }, { 'color': 'a7a80c', 'name': '624' }, { 'color': '00b0a6', 'name': '628' }, { 'color': '01818e', 'name': '630' }, { 'color': '0087b6', 'name': '632' }, { 'color': '066173', 'name': '634' }, { 'color': '006c83', 'name': '636' }, { 'color': '5d693b', 'name': '638' }, { 'color': '5e9a67', 'name': '640' }, { 'color': '08ad2d', 'name': '644' }, { 'color': '94d233', 'name': '652' }, { 'color': '048d63', 'name': '662' }, { 'color': 'd4ad2e', 'name': '664' }, { 'color': '00955b', 'name': '666' }, { 'color': '036651', 'name': '674' }, { 'color': '045f58', 'name': '682' }, { 'color': '045f58', 'name': '684' }, { 'color': 'eee570', 'name': '707' }, { 'color': 'fcea00', 'name': '713' }, { 'color': 'f8e201', 'name': '717' }, { 'color': 'ffca00', 'name': '733' }, { 'color': 'c38e00', 'name': '737' }, { 'color': 'ff5301', 'name': '739' }, { 'color': 'c57e00', 'name': '743' }, { 'color': 'd26101', 'name': '751' }, { 'color': 'e03b03', 'name': '753' }, { 'color': 'a80522', 'name': '866' }];
        var colors = "";
        var colors_room = "";
        for (var i = 0; i < colors_palitre.length; i++) { colors += "<div class='items' data-choise-ceil-color-name='" + colors_palitre[i].name + "' data-choise-color-code='" + colors_palitre[i].color + "'><div class='p_colors_item' style='background:#" + colors_palitre[i].color + "'></div></div>\n"; colors_room += "<div class='p_col_inter_item'><div class='p_colors_item_room' style='background:#" + colors_palitre[i].color + "'></div>" + colors_palitre[i].name + "</div>\n"; }
        $(".p_ceil_color_gloss").html(colors);
        $(".p_col_inter_bott_cont").html(colors_room);
        var colors_palitre_frosted = [{ 'color': '73d0d7', 'name': '100' }, { 'color': 'b7cde4', 'name': '102' }, { 'color': '71b0cf', 'name': '104' }, { 'color': '3399c1', 'name': '108' }, { 'color': 'accee7', 'name': '110' }, { 'color': '09a0e9', 'name': '114' }, { 'color': '0197d2', 'name': '120' }, { 'color': '0b66b7', 'name': '140' }, { 'color': '0147c0', 'name': '156' }, { 'color': '000da9', 'name': '160' }, { 'color': '06368a', 'name': '162' }, { 'color': '0d387d', 'name': '180' }, { 'color': '254166', 'name': '184' }, { 'color': 'b9cced', 'name': '201' }, { 'color': '788ab2', 'name': '205' }, { 'color': 'd34180', 'name': '215' }, { 'color': '867acc', 'name': '223' }, { 'color': 'ac94e2', 'name': '225' }, { 'color': '89478e', 'name': '227' }, { 'color': '9963b9', 'name': '229' }, { 'color': '803472', 'name': '231' }, { 'color': '0d387d', 'name': '233' }, { 'color': '801d53', 'name': '235' }, { 'color': 'f6fafd', 'name': '303' }, { 'color': 'edf0f3', 'name': '305' }, { 'color': 'd6cebb', 'name': '307' }, { 'color': 'c8c9c3', 'name': '309' }, { 'color': 'bec3bf', 'name': '311' }, { 'color': '90a7b5', 'name': '313' }, { 'color': '4c6a75', 'name': '315' }, { 'color': 'a1a6a0', 'name': '317' }, { 'color': '73878e', 'name': '319' }, { 'color': '53666c', 'name': '333' }, { 'color': '0a0e0f', 'name': '347' }, { 'color': 'fde5e5', 'name': '400' }, { 'color': 'f28eb0', 'name': '402' }, { 'color': 'ffceee', 'name': '404' }, { 'color': 'dea882', 'name': '406' }, { 'color': 'd67f78', 'name': '408' }, { 'color': 'b85d4a', 'name': '410' }, { 'color': 'feb3ec', 'name': '412' }, { 'color': 'd07c8c', 'name': '416' }, { 'color': 'e60b11', 'name': '420' }, { 'color': 'ff1888', 'name': '436' }, { 'color': 'f826a1', 'name': '442' }, { 'color': 'd50b79', 'name': '444' }, { 'color': 'd30835', 'name': '462' }, { 'color': 'db3b55', 'name': '466' }, { 'color': 'a82159', 'name': '474' }, { 'color': '9a1737', 'name': '476' }, { 'color': '70253c', 'name': '478' }, { 'color': '581d2f', 'name': '490' }, { 'color': 'efeed9', 'name': '501' }, { 'color': 'ece6c4', 'name': '507' }, { 'color': 'daba7d', 'name': '511' }, { 'color': 'b0b481', 'name': '515' }, { 'color': 'aea07d', 'name': '519' }, { 'color': '945e46', 'name': '525' }, { 'color': 'a56b21', 'name': '545' }, { 'color': '8f3c2e', 'name': '574' }, { 'color': '67423c', 'name': '555' }, { 'color': '533831', 'name': '571' }, { 'color': '894e2c', 'name': '753' }, { 'color': '4e3b3d', 'name': '577' }, { 'color': 'f0f6e8', 'name': '600' }, { 'color': 'e5f5da', 'name': '602' }, { 'color': 'c3e6e8', 'name': '604' }, { 'color': '8fe0e3', 'name': '606' }, { 'color': '1fd8d3', 'name': '608' }, { 'color': '6ea496', 'name': '610' }, { 'color': '739266', 'name': '614' }, { 'color': 'a6d4e7', 'name': '618' }, { 'color': 'a7a80c', 'name': '624' }, { 'color': '00b0a6', 'name': '628' }, { 'color': '01818e', 'name': '630' }, { 'color': '0087b6', 'name': '632' }, { 'color': '066173', 'name': '634' }, { 'color': '006c83', 'name': '636' }, { 'color': '5d693b', 'name': '638' }, { 'color': '5e9a67', 'name': '640' }, { 'color': '08ad2d', 'name': '644' }, { 'color': '94d233', 'name': '652' }, { 'color': '048d63', 'name': '662' }, { 'color': 'd4ad2e', 'name': '664' }, { 'color': '00955b', 'name': '666' }, { 'color': '036651', 'name': '674' }, { 'color': '045f58', 'name': '682' }, { 'color': '045f58', 'name': '684' }, { 'color': 'eee570', 'name': '707' }, { 'color': 'fcea00', 'name': '713' }, { 'color': 'f8e201', 'name': '717' }, { 'color': 'ffca00', 'name': '733' }, { 'color': 'c38e00', 'name': '737' }, { 'color': 'ff5301', 'name': '739' }, { 'color': 'c57e00', 'name': '743' }, { 'color': 'd26101', 'name': '751' }, { 'color': 'e03b03', 'name': '753' }, { 'color': 'a80522', 'name': '866' }];
        var colors_room_frosted = "";
        for (var i = 0; i < colors_palitre_frosted.length; i++) { colors_room_frosted += "<div class='items' data-choise-ceil-color-name='" + colors_palitre_frosted[i].name + "' data-choise-color-code='" + colors_palitre_frosted[i].color + "'><div class='p_colors_item' style='background:#" + colors_palitre_frosted[i].color + "'></div></div>\n"; }
        $(".p_ceil_color_frosted").html(colors_room_frosted);
        var duration = 500;
        $(document).on("click", "#p_right_control", function (event) { if (Number($(".p_right_controls").css("right").replace("px", "")) < 0) { $(".p_right_controls").animate({ 'right': 0 }, duration); $(".p_bg").fadeIn(duration); } else { $(".p_right_controls").animate({ 'right': '-350px' }, duration); $(".p_bg").fadeOut(duration); } });
        $(".p_bg").click(function (event) { });
        $(document).on("click", ".p_bg", function (event) { if (Number($(".p_right_controls").css("right").replace("px", "")) >= 0) { $(".p_right_controls").animate({ 'right': '-350px' }, duration); $(".p_bg").fadeOut(duration); } });

        $(document).on("click", "[data-room-select=standart]", function (event) {
            var obj = this;
            var hconfirm = false;
            var current_room = $("#p_curent_room").val();
            if (current_room == "custom") {
                window.process_popup_addition = this;
                if (confirm("Jetzt wird eigenes Bild benutzt. Möchten Sie unsere Bilder benutzen?", "change_room")) {
                    hconfirm = true;
                }
            } else {
                $("#p_draw_ceil").css("display", "none");
                $(".p_right_con_cont_custom_lines").fadeOut(300);
                var obj = this;
                $("#p_curent_room").val("standart");
                $(".p_pal_bg_photo").animate({ opacity: 0 }, 200);
                var src = $(obj).find("img").attr("src");
                var src_gloss = src.split(".");
                src_gloss = src_gloss[0] + "_gloss." + src_gloss[1];
                var current = $("#p_curent_type").val();
                if (current == "gloss") {
                    $("#p_primary_img").attr("src", src_gloss);
                } else {
                    $("#p_primary_img").attr("src", src);
                }
                $(".room_items_active").removeClass("room_items_active");
                $(obj).addClass("room_items_active");
                if ($("#p_curent_type").val() == "gloss") {
                    $("[data-change-type=gloss]").addClass("right_items_active");
                } else {
                    $("[data-change-type=frosted]").addClass("right_items_active");
                }

                if ($(obj).find(".p_interior_items_name").text() == "Wohnzimmer") {
                    $(".p_logo_container").hide();
                    $(".p_l_1").show();
                } else if ($(obj).find(".p_interior_items_name").text() == "Schlafzimmer") {
                    $(".p_logo_container").hide();
                    $(".p_l_2").show();
                } else {
                    $(".p_logo_container").hide();
                }
                switch_colors_to_curent();
            }
        });
        $(document).on("click", "[data-change-type]", function (event) { var obj = this; var type = $(obj).attr("data-change-type"); var current_room = $("#p_curent_room").val(); if (current_room == "standart") { if (type == "gloss" && $("#p_curent_is_gloss").val() == "yes" && $("#p_curent_type").val() != "gloss") { $(".p_ceil_color_gloss").css("display", "block"); $(".p_ceil_color_frosted").css("display", "none"); var current_src = $("#p_primary_img").attr("src"); $("#p_primary_img").attr("src", current_src.replace(".png", "_gloss.png")); } else if (type == "frosted") { var current_src = $("#p_primary_img").attr("src"); $("#p_primary_img").attr("src", current_src.replace("_gloss", "")); $(".p_ceil_color_gloss").css("display", "none"); $(".p_ceil_color_frosted").css("display", "block"); } $(".right_items_active").removeClass("right_items_active"); $(obj).addClass("right_items_active"); $("#p_curent_type").val(type); if ($("html").width() <= 768) { $(".p_right_controls").animate({ 'right': '-350px' }, duration); $(".p_bg").fadeOut(duration); } } else { if (current_room == "print") { alert("Für Farbauswahl wählen Sie bitte die Räume (Wohnzimmer) (Küche) (Schlafzimmer)!"); } if (current_room == "custom") { alert("Um die Farbe auszuwählen, markieren Sie bitte die Decke!"); } } });
        $(document).on("click", "[data-choise-ceil-color-name]", function (event) {
            var obj = this;
            var name = $(obj).attr("data-choise-ceil-color-name");
            var color = $(obj).find(".p_colors_item").css("background");
            var color_attr = $(obj).find(".p_colors_item").attr("style");
            var color_code = $(obj).attr("data-choise-color-code");
            var current_room = $("#p_curent_room").val();
            if (current_room == "standart") {
                if (color == "") {
                    $(".p_palette_photo").attr("style", color_attr);
                } else {
                    $(".p_palette_photo").css("background", color);
                }
                $("[data-choise-color=ceil]").text(name);
            } else {
                if (current_room == "print") {
                    alert("Für Farbauswahl wählen Sie bitte die Räume (Wohnzimmer) (Küche) (Schlafzimmer)!");
                }
                if (current_room == "custom") {
                    if (window.p_canvas_points.length > 0) {
                        window.p_canvas_edit = "close";
                        clearCanvas();
                        window.ctx.fillStyle = "#" + color_code;
                        window.ctx.beginPath();
                        if (!window.p_canvas_closed) {
                            if (window.p_canvas_points[0].x < Number(Math.ceil(window.canvas_width / 2)) && window.p_canvas_points[0].x < window.p_canvas_points[window.p_canvas_points.length - 1].x) {
                                window.ctx.moveTo(0, 0);
                                window.ctx.lineTo(0, window.p_canvas_points[0].y);
                                for (var i = 0; i < (window.p_canvas_points.length); i++) {
                                    window.ctx.lineTo(window.p_canvas_points[i].x, window.p_canvas_points[i].y);
                                }
                                window.ctx.lineTo(window.canvas_width, window.p_canvas_points[i - 1].y);
                                window.ctx.lineTo(window.canvas_width, 0);
                            } else {
                                window.ctx.moveTo(window.canvas_width, 0);
                                window.ctx.lineTo(window.canvas_width, window.p_canvas_points[window.p_canvas_points.length - 1].y);
                                for (var i = 0; i < (window.p_canvas_points.length); i++) {
                                    window.ctx.lineTo(window.p_canvas_points[i].x, window.p_canvas_points[i].y);
                                }
                                window.ctx.lineTo(0, window.p_canvas_points[i - 1].y);
                                window.ctx.lineTo(0, 0);
                            }
                        } else {
                            window.ctx.beginPath();
                            window.ctx.moveTo(window.p_canvas_points[0].x, window.p_canvas_points[0].y);
                            for (var i = 0; i < (window.p_canvas_points.length - 1); i++) {
                                window.ctx.lineTo(window.p_canvas_points[i + 1].x, window.p_canvas_points[i + 1].y);
                            }
                        }
                        window.ctx.closePath();
                        window.ctx.fill();
                    } else {
                        showHint();
                    }
                }
            }
            if ($("html").width() <= 768) {
                $(".p_right_controls").animate({ 'right': '-350px' }, duration);
                $(".p_bg").fadeOut(duration);
            }
        });

        $(document).on("click", "[data-room-select=print]", function (event) {
            var obj = this;
            var src = $(obj).find("img").attr("src");
            var current_room = $("#p_curent_room").val();
            var hconfirm = false;
            if (current_room == "custom") {
                window.process_popup_addition = [obj, src];
                if (confirm("Jetzt wird eigenes Bild benutzt. Möchten Sie unsere Bilder benutzen?", "change_print_room")) {
                    hconfirm = true;
                }
            } else {
                $("#p_draw_ceil").css("display", "none");
                $(".p_right_con_cont_custom_lines").fadeOut(300);
                $("#p_primary_img").attr("src", src);
                $("#p_curent_room").val("print");
                $(".right_items_active").removeClass("right_items_active");
                $(".room_items_active").removeClass("room_items_active");
                $(obj).addClass("room_items_active");
                $(".p_pal_bg_photo").animate({ opacity: 1 }, 200); switch_colors_to_curent();

                if ($(obj).find(".p_interior_items_name").text() == "Wohnzimmer (print)") {
                    $(".p_logo_container").hide();
                    $(".p_l_3").show();
                } else if ($(obj).find(".p_interior_items_name").text() == "Küche (print)") {
                    $(".p_logo_container").hide();
                    $(".p_l_4").show();
                } else if ($(obj).find(".p_interior_items_name").text() == "Schlafzimmer (print)") {
                    $(".p_logo_container").hide();
                    $(".p_l_5").show();
                } else {
                    $(".p_logo_container").hide();
                }
            }
        });

        $(document).on("click", ".p_room_cont_items", function (event) {
            var current_room = $("#p_curent_room").val();
            if (current_room == "print") {
                $(".p_pal_bg_photo").css({ "height": "auto" });
                var src = $(this).attr("src");
                var index = Number($(this).index());
                var split_src = src.split("/");
                var full = split_src[0] + "/" + split_src[1] + "/" + split_src[2] + "/" + split_src[3].replace('-1', '');
                $(".p_pal_bg_photo").attr("src", full.replace("jpg", "gif")).animate({ opacity: 1 }, 200);
                $("#p_curent_room").val("print");
                $("#p_primary_img").attr("src", $("#p_primary_img").attr("src").replace("_gloss", ""));
                $(".right_items_active").removeClass("right_items_active");
                $("[data-choise-color=design]").text("A" + Number(100 + index));
                if ($("html").width() <= 768) {
                    $(".p_right_controls").animate({ 'right': '-350px' }, duration);
                    $(".p_bg").fadeOut(duration);
                }
            } else {
                if (current_room == "standart") {
                    alert("Um ein Bild hinzufügen, wählen Sie bitte einen (print) Raum.");
                }
                if (current_room == "custom") {
                    alert("Um ein Design hinzufügen, wählen Sie bitte einen (print) Raum!");
                }
            }
        });

        $(document).on("change", "#p_inerior_upload", function (event) {
            var files = this.files; event.stopPropagation(); event.preventDefault(); var data = new FormData(); var gd = 0; var file_name; $.each(files, function (key, value) { if (value.size <= 5000000) { data.append(key, value); gd++ } else { alert("Die Datei darf 5mb nicht überschreiten."); } file_name = value.name; }); if (gd != 0) {
                $(".p_bg_file").css("display", "block"); $.ajax({
                    url: 'palette_uploads_img.php?upload_bild=new', type: 'POST', data: data, cache: false, dataType: 'json', processData: false, contentType: false, success: function (respond, textStatus, jqXHR) {
                        $("[data-file-upload-name=bild]").text(file_name);
                        $(".p_bg_file").css("display", "none");
                        if (respond.status == 7) {
                            $(".p_logo_container").hide();
                            window.p_canvas_points.splice(0, window.p_canvas_points.length);
                            window.p_canvas_edit = "open";
                            window.p_canvas_closed = false;
                            $("#p_primary_img").attr("src", respond.file);
                            $("#p_curent_room").val("custom");
                            $(".right_items_active").removeClass("right_items_active");
                            $(".room_items_active").removeClass("room_items_active");
                            setTimeout(function () {
                                $("#p_draw_ceil").css("display", "block").attr({
                                    "width": Math.ceil($("#p_primary_img").width()), "height": Math.ceil($("#p_primary_img").height())
                                });
                                window.p_canvas = document.getElementById("p_draw_ceil");
                                window.ctx = window.p_canvas.getContext('2d');
                                showHint();
                                if ($("html").width() <= 768) {
                                    $(".p_right_controls").animate({ 'right': '-350px' }, duration);
                                    $(".p_bg").fadeOut(duration);
                                }
                                $(".p_right_con_cont_custom_lines, .p_rotate").slideDown(300);
                                $(".p_right_con_cont_custom_lines .p_points").slideUp(300);
                                $(".p_bg_file").css("display", "none");
                                switch_colors_to_gloss();
                            }, 300);
                        } else alert("Fehler beim Hochladen. (" + respond.text + ")");
                    }, error: function (jqXHR, textStatus, errorThrown) { alert('Keine Internetverbindung'); $(".p_bg_file").css("display", "none"); }
                });
            }
        }); $(document).on("change", "#p_design_upload", function (event) { if ($("#p_curent_room").val() == "print") { var files = this.files; event.stopPropagation(); event.preventDefault(); var data = new FormData(); var gd = 0; var file_name; $.each(files, function (key, value) { if (value.size <= 5000000) { data.append(key, value); gd++ } else { alert("Die Datei darf 5mb nicht überschreiten."); } file_name = value.name; }); if (gd != 0) { $(".p_bg_file").css("display", "block"); $.ajax({ url: 'palette_uploads_img.php?upload_design=new', type: 'POST', data: data, cache: false, dataType: 'json', processData: false, contentType: false, success: function (respond, textStatus, jqXHR) { $("[data-file-upload-name=design]").text(file_name); if (respond.status == 7) { $(".p_pal_bg_photo").attr("src", respond.file).css({ "height": Math.ceil($(".p_palette_photo").height() / 2) }); } else alert("Ошибка загрузки файла. Текст ошибки: " + respond.text); $(".p_bg_file").css("display", "none"); }, error: function (jqXHR, textStatus, errorThrown) { alert('Keine Internetverbindung'); $(".p_bg_file").css("display", "none"); } }); } } else { alert("Um ein Bild hochzuladen, wählen Sie bitte einen (print) Raum!"); $("#p_design_upload").val(""); } }); $(document).on("click", "[data-canvas-rotate]", function (e) { var way = $(this).attr("data-canvas-rotate"); var rotate_deg = $(".p_pal_pr_photo").attr("data-rotate"); if (typeof rotate_deg == 'undefined') { $(".p_pal_pr_photo").css("transform", "rotate(" + ((way == "left") ? "-90" : "90") + "deg)").attr("data-rotate", ((way == "left") ? "-90" : "90")); } else { rotate_deg = (way == "left") ? Number(rotate_deg) - 90 : Number(rotate_deg) + 90; $(".p_pal_pr_photo").css("transform", "rotate(" + rotate_deg + "deg)").attr("data-rotate", rotate_deg); } }); $("#p_draw_ceil").click(function (e) { }); $(document).on("click", "#p_draw_ceil", function (e) { if (window.p_canvas_edit == "open") { if (!window.p_canvas_closed) { var offset = $(this).offset(); var x = Math.ceil(e.clientX - offset.left); var y = getUnScrollPoint(Math.ceil(e.clientY - offset.top)); var insert_points = insertPoint(x, y); if (window.p_canvas_points.length > 1) { drawLine(window.p_canvas_points[window.p_canvas_points.length - 2].x, window.p_canvas_points[window.p_canvas_points.length - 2].y, insert_points.x, insert_points.y); } drawCircle(insert_points.x, insert_points.y); } else { alert("Sie können kein Punkt verschieben, da der erster und letzter Punkt verbunden sind."); } } else alert("Чтобы изменить форму потока удалите текущую"); }); $(document).on("click", "[data-canvas-remove-point]", function (e) { if ($(this).attr("data-canvas-remove-point") == "last") { if (confirm("Möchten Sie LETZTEN Punkt löschen?", "remove_point")) { } } else { if (confirm("Möchten Sie ALLE Punkte löschen?", "remove_point_2")) { clearCanvas(); window.p_canvas_points.splice(0, window.p_canvas_points.length); window.p_canvas_edit = "open"; window.p_canvas_closed = false; if ($("html").width() <= 768) { $(".p_right_controls").animate({ 'right': '-350px' }, duration); $(".p_bg").fadeOut(duration); } } } if (window.p_canvas_points.length == 0) { $(".p_right_con_cont_custom_lines .p_points").slideUp(300); if ($("html").width() <= 768) { $(".p_right_controls").animate({ 'right': '-350px' }, duration); $(".p_bg").fadeOut(duration); } } }); $(document).on("click", ".s_alert_inf, .alert_button_ok", function () { $(".p_bg_order_popup").fadeOut(300); });
        $(document).on("click", "[data-popup-button]", function () {
            var obj = this;
            var type_window = $(obj).parents(".p_bg_order_popup").attr("data-popup");
            var type_button = $(obj).attr("data-popup-button");
            if (type_window == "confirm" && type_button == "ok") {
                if (window.process_popup) {
                    if (window.process_popup.type == "change_room") {
                        $("#p_draw_ceil").css("display", "none");
                        $(".p_right_con_cont_custom_lines").fadeOut(300);
                        var obj_in = window.process_popup_addition;
                        if ($(obj_in).find(".p_interior_items_name").text() == "Wohnzimmer") {
                            $(".p_logo_container").hide();
                            $(".p_l_1").show();
                        } else if ($(obj_in).find(".p_interior_items_name").text() == "Schlafzimmer") {
                            $(".p_logo_container").hide();
                            $(".p_l_2").show();
                        } else {
                            $(".p_logo_container").hide();
                        }
                        $("#p_curent_room").val("standart");
                        $(".p_pal_bg_photo").animate({ opacity: 0 }, 200);
                        var src = $(obj_in).find("img").attr("src");
                        var src_gloss = src.split(".");
                        src_gloss = src_gloss[0] + "_gloss." + src_gloss[1];
                        var current = $("#p_curent_type").val();
                        if (current == "gloss") {
                            $("#p_primary_img").attr("src", src_gloss);
                        } else {
                            $("#p_primary_img").attr("src", src);
                        }
                        $(".room_items_active").removeClass("room_items_active");
                        $(obj_in).addClass("room_items_active");
                        if ($("#p_curent_type").val() == "gloss") {
                            $("[data-change-type=gloss]").addClass("right_items_active");
                        } else {
                            $("[data-change-type=frosted]").addClass("right_items_active");
                        }
                        switch_colors_to_curent();
                    } else if (window.process_popup.type == "change_print_room") {

                        if ($(window.process_popup_addition[0]).find(".p_interior_items_name").text() == "Wohnzimmer (print)") {
                            $(".p_logo_container").hide();
                            $(".p_l_3").show();
                        } else if ($(window.process_popup_addition[0]).find(".p_interior_items_name").text() == "Küche (print)") {
                            $(".p_logo_container").hide();
                            $(".p_l_4").show();
                        } else if ($(window.process_popup_addition[0]).find(".p_interior_items_name").text() == "Schlafzimmer (print)") {
                            $(".p_logo_container").hide();
                            $(".p_l_5").show();
                        } else {
                            $(".p_logo_container").hide();
                        }

                        $("#p_draw_ceil").css("display", "none");
                        $(".p_right_con_cont_custom_lines").fadeOut(300);
                        $("#p_primary_img").attr("src", window.process_popup_addition[1]);
                        $("#p_curent_room").val("print");
                        $(".right_items_active").removeClass("right_items_active");
                        $(".room_items_active").removeClass("room_items_active");
                        $(window.process_popup_addition[0]).addClass("room_items_active");
                        $(".p_pal_bg_photo").animate({ opacity: 1 }, 200);
                        switch_colors_to_curent();
                    } else if (window.process_popup.type == "remove_point") {
                        clearCanvas();
                        window.p_canvas_points.splice((window.p_canvas_points.length - 1), 1);
                        window.p_canvas_edit = "open";
                        window.p_canvas_closed = false;
                        for (var i = 0; i < window.p_canvas_points.length; i++) {
                            drawCircle(window.p_canvas_points[i].x, window.p_canvas_points[i].y);
                            if (i == 0) window.ctx.moveTo(window.p_canvas_points[i].x, window.p_canvas_points[i].y);
                            else {
                                drawLine(window.p_canvas_points[i - 1].x, window.p_canvas_points[i - 1].y, window.p_canvas_points[i].x, window.p_canvas_points[i].y);
                            }
                        }
                        if ($("html").width() <= 768) {
                            $(".p_right_controls").animate({ 'right': '-350px' }, duration);
                            $(".p_bg").fadeOut(duration);
                        }
                    } else if (window.process_popup.type == "remove_point_2") {
                        clearCanvas();
                        window.p_canvas_points.splice(0, window.p_canvas_points.length);
                        window.p_canvas_edit = "open";
                        window.p_canvas_closed = false;
                        if ($("html").width() <= 768) {
                            $(".p_right_controls").animate({ 'right': '-350px' }, duration);
                            $(".p_bg").fadeOut(duration);
                        }
                    }
                }
            }
        });

    }
    /*  from palette_scripts.js OFF  */

});

/*  from palette_script.js ON  */

function drawLine(from_x, from_y, to_x, to_y) {
    window.ctx.strokeStyle = "#FFA500";
    window.ctx.beginPath();
    window.ctx.moveTo(from_x, from_y);
    window.ctx.lineTo(to_x, to_y);
    window.ctx.closePath();
    window.ctx.stroke();
}
function insertPoint(x, y) {
    if (x < window.point_max_offset) x = 3;
    if (y < window.point_max_offset) y = 3;
    if (window.canvas_width - x < window.point_max_offset) x = window.canvas_width - 3;
    if (window.p_canvas_points.length > 1) {
        var check_close = [false, false];
        if ((window.p_canvas_points[0].x <= x && x <= window.p_canvas_points[0].x + window.point_max_offset) || (window.p_canvas_points[0].x >= x && x >= window.p_canvas_points[0].x - window.point_max_offset)) {
            x = window.p_canvas_points[0].x;
            check_close[0] = true;
        }
        if ((window.p_canvas_points[0].y <= y && y <= window.p_canvas_points[0].y + window.point_max_offset) || (window.p_canvas_points[0].y >= y && y >= window.p_canvas_points[0].y - window.point_max_offset)) {
            y = window.p_canvas_points[0].y; check_close[1] = true;
        }
        if (check_close[0] == true && check_close[1] == true) window.p_canvas_closed = true;
    }
    window.p_canvas_points[window.p_canvas_points.length] = { 'x': x, 'y': y };
    $(".p_right_con_cont_custom_lines .p_points").slideDown(300);
    return { 'x': x, 'y': y };
}
function clearCanvas() {
    $("#p_draw_ceil").attr({ "width": $("#p_draw_ceil").width(), "height": $("#p_draw_ceil").height() });
}
function drawCircle(x, y) {
    window.ctx.fillStyle = "#FFA500"; window.ctx.beginPath();
    var circle = new Path2D();
    window.ctx.arc(x, y, 3, 0, Math.PI * 2, true);
    window.ctx.closePath();
    window.ctx.fill();
}
function showHint() {
    $(".p_palette_message_cbg").animate({ top: '5px', opacity: 1 }, 300, function () { setTimeout(function () { $(".p_palette_message_cbg").animate({ top: '-40px', opacity: 0 }, 300); }, 3000); });
}
function switch_colors_to_gloss() {
    $(".p_ceil_color_gloss").css("display", "block");
    $(".p_ceil_color_frosted").css("display", "none");
}
function switch_colors_to_curent() {
    if ($("#p_curent_type").val() == "gloss") {
        switch_colors_to_gloss();
    } else {
        $(".p_ceil_color_gloss").css("display", "none");
        $(".p_ceil_color_frosted").css("display", "block");
    }
}
function getUnScrollPoint(y) {
    return y + $(window).scrollTop();
}
function alert(text) {
    $("[data-popup=alert]").find(".b_order_h").text(text);
    $("[data-popup=alert]").fadeIn(300);
}
function confirm(text, type) {
    $("[data-popup=confirm]").find(".b_order_h").text(text);
    $("[data-popup=confirm]").fadeIn(300);
    window.process_popup = { 'type': type, 'text': text };
}

/*  from palette_script.js OFF  */