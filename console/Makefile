$(eval REGISTRY=http://registry.npm.taobao.org)
$(eval ESLINT_FILES=$(shell ls -S `find ./assets -type f -not -path "*/node_modules/*" -not -path "./dist/*" -not -path "./out/*" -not -path "*/.build/*" -not -path "*/.package/*" -name "*.[js][jsx]"`))

install:
	@npm install --registry=${REGISTRY}
	@cd assets && npm install --registry=${REGISTRY}

release: front
	@echo "env: ${env}"
	@mkdir -p out/release
	@if [ -d assets/.package ]; then\
		rsync -av . out/release --exclude .git --exclude node_modules --exclude out --exclude test --exclude assets;\
		mv assets/.package out/release/assets;\
	else\
		rsync -av . out/release --exclude .git --exclude node_modules --exclude out --exclude test;\
	fi
	@cd out/release && NODE_ENV=${env} npm install --registry=${REGISTRY}
	@if [ -f out/release/config/config_${env}.js ]; then\
		cp out/release/config/config_${env}.js out/release/config/config.js;\
	fi

front:
	@echo "building assets..."
	@npm install honeypack --registry=${REGISTRY}
	@cd assets && NODE_ENV=production npm install --registry=${REGISTRY}
	@cd assets && ../node_modules/.bin/honeypack build
	@if [ -d assets/static ]; then\
		cp -r assets/static assets/.package/static;\
	fi
	@echo "assets build done\n"

test:
	@node_modules/.bin/mocha --require intelli-espower-loader $(shell find test -name *.test.js)

cover:
	@node_modules/.bin/istanbul cover node_modules/.bin/_mocha -- $(shell find test -name *.test.js)

clean:
	@rm -rf node_modules assets/node_modules

eslint:
	@echo 'eslint doing...'
	@./node_modules/.bin/eslint ${ESLINT_FILES}
	@echo 'eslint done!'

publish:
	@$(eval VERSION=`node -e 'console.log(require("./package.json").version)'`)
	@$(eval TAG='publish/'${VERSION})
	@git tag ${TAG}
	git push origin ${TAG}
	npm publish --registry=http://registry.npmjs.org

.PHONY: install release front test cover clean eslint publish
