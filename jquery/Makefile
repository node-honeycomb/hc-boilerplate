install:
	@npm install --registry=https://registry.npm.taobao.org
	@cd assets && npm install --registry=https://registry.npm.taobao.org

release:
	@echo "env: ${env}"
	@rm -rf ./out
	@mkdir -p out/release
	@rsync -av . out/release --exclude assets/.cubecache --exclude .git --exclude node_modules --exclude out --exclude test
	@npm install --registry=https://registry.npm.taobao.org
	@cd out/release && NODE_ENV=${env} npm install --registry=https://registry.npm.taobao.org
	@cd out/release/assets && NODE_ENV=${env} npm install --registry=https://registry.npm.taobao.org
	@if [ -f out/release/config/config_${env}.js ]; then\
		cp out/release/config/config_${env}.js out/release/config/config.js;\
	fi
	@./node_modules/.bin/cube build ./out/release/assets --mangle-file-name --smart
	@rm -rf ./out/release/assets && mv ./out/release/assets.release ./out/release/assets

test:
	@node_modules/.bin/mocha --require intelli-espower-loader $(shell find test -name *.test.js)

cover:
	@node_modules/.bin/istanbul cover node_modules/.bin/_mocha -- $(shell find test -name *.test.js)

clean:
	@rm -rf node_modules assets/node_modules

.PHONY: install release test cover clean
