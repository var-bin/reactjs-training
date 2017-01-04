import gulp from "gulp";
import path from "path";
import browserify from "browserify";
import source from "vinyl-source-stream";

const DEST_PATH = path.normalize("public/dist");
const SRC_PATH = path.normalize("src/app.js");
const BUNDLE_NAME = "bundle.js";
const WATCH_SRC_PATH = "src/**/*.js";

gulp.task("transpile", () => {

  return browserify(SRC_PATH)
    .transform("babelify")
    .bundle()
    .pipe(source(BUNDLE_NAME))
    .pipe(gulp.dest(DEST_PATH));

});

gulp.task("watch", ["transpile"], () => {
  gulp.watch(WATCH_SRC_PATH, ["transpile"]);
});

gulp.task("default", ["transpile"]);
