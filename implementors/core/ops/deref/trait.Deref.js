(function() {var implementors = {};
implementors["wayland_client"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_client/struct.Display.html\" title=\"struct wayland_client::Display\">Display</a>","synthetic":false,"types":["wayland_client::display::Display"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"wayland_client/trait.Interface.html\" title=\"trait wayland_client::Interface\">Interface</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_client/struct.Attached.html\" title=\"struct wayland_client::Attached\">Attached</a>&lt;I&gt;","synthetic":false,"types":["wayland_client::proxy::Attached"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"wayland_client/trait.Interface.html\" title=\"trait wayland_client::Interface\">Interface</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_client/struct.Main.html\" title=\"struct wayland_client::Main\">Main</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"wayland_client/struct.Proxy.html\" title=\"struct wayland_client::Proxy\">Proxy</a>&lt;I&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"wayland_client/struct.Proxy.html\" title=\"struct wayland_client::Proxy\">Proxy</a>&lt;I&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["wayland_client::proxy::Main"]}];
implementors["wayland_cursor"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_cursor/struct.CursorImageBuffer.html\" title=\"struct wayland_cursor::CursorImageBuffer\">CursorImageBuffer</a>","synthetic":false,"types":["wayland_cursor::CursorImageBuffer"]}];
implementors["wayland_server"] = [{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_server/struct.Main.html\" title=\"struct wayland_server::Main\">Main</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"wayland_server/trait.Interface.html\" title=\"trait wayland_server::Interface\">Interface</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"wayland_server/struct.Resource.html\" title=\"struct wayland_server::Resource\">Resource</a>&lt;I&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"wayland_server/struct.Resource.html\" title=\"struct wayland_server::Resource\">Resource</a>&lt;I&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["wayland_server::resource::Main"]}];
implementors["wayland_sys"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/client/struct.WAYLAND_CLIENT_OPTION.html\" title=\"struct wayland_sys::client::WAYLAND_CLIENT_OPTION\">WAYLAND_CLIENT_OPTION</a>","synthetic":false,"types":["wayland_sys::client::WAYLAND_CLIENT_OPTION"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/client/struct.WAYLAND_CLIENT_HANDLE.html\" title=\"struct wayland_sys::client::WAYLAND_CLIENT_HANDLE\">WAYLAND_CLIENT_HANDLE</a>","synthetic":false,"types":["wayland_sys::client::WAYLAND_CLIENT_HANDLE"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/server/struct.WAYLAND_SERVER_OPTION.html\" title=\"struct wayland_sys::server::WAYLAND_SERVER_OPTION\">WAYLAND_SERVER_OPTION</a>","synthetic":false,"types":["wayland_sys::server::WAYLAND_SERVER_OPTION"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/server/struct.WAYLAND_SERVER_HANDLE.html\" title=\"struct wayland_sys::server::WAYLAND_SERVER_HANDLE\">WAYLAND_SERVER_HANDLE</a>","synthetic":false,"types":["wayland_sys::server::WAYLAND_SERVER_HANDLE"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/egl/struct.WAYLAND_EGL_OPTION.html\" title=\"struct wayland_sys::egl::WAYLAND_EGL_OPTION\">WAYLAND_EGL_OPTION</a>","synthetic":false,"types":["wayland_sys::egl::WAYLAND_EGL_OPTION"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/egl/struct.WAYLAND_EGL_HANDLE.html\" title=\"struct wayland_sys::egl::WAYLAND_EGL_HANDLE\">WAYLAND_EGL_HANDLE</a>","synthetic":false,"types":["wayland_sys::egl::WAYLAND_EGL_HANDLE"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/cursor/struct.WAYLAND_CURSOR_OPTION.html\" title=\"struct wayland_sys::cursor::WAYLAND_CURSOR_OPTION\">WAYLAND_CURSOR_OPTION</a>","synthetic":false,"types":["wayland_sys::cursor::WAYLAND_CURSOR_OPTION"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"wayland_sys/cursor/struct.WAYLAND_CURSOR_HANDLE.html\" title=\"struct wayland_sys::cursor::WAYLAND_CURSOR_HANDLE\">WAYLAND_CURSOR_HANDLE</a>","synthetic":false,"types":["wayland_sys::cursor::WAYLAND_CURSOR_HANDLE"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()