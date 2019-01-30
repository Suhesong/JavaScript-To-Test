language = 'zh-CHS';
messages = {
    'zh-CHS': {
        'addChildFailed': '新增子级失败',
        'addSiblingFailed': '新增同级失败',
        'deleteFailed': '删除失败',
        'multiSaveFailed': '批量保存失败',
        'appendFailed': '追加失败',
        'queryFailed': '查询失败',
        'cancelFailed': '取消失败',
        'updateFailed': '更新失败',
        'addFailed': '新增失败',
        'loadFailed': '加载失败',
        'saveSuccess': '保存成功！',
        'saveFailed': '保存失败！',
        'deleteSuccess': '删除成功！',
        'deleteFaild': '删除失败！',
        'confirmDeletion': '确认删除？',
        'submitSuccess': '提交审批成功！',
        'submitFaild': '提交审批失败！',
        'notifyTitle': '系统提示',
        'httpError': 'HTTP请求错误！请检查Server端错误！'
    },
    'en': {
        'addChildFailed': 'Add Child Failed',
        'addSiblingFailed': 'Add Sibling Failed',
        'deleteFailed': 'Delete Failed',
        'multiSaveFailed': 'MultiSave Failed',
        'appendFailed': 'Append Failed',
        'queryFailed': 'Query Failed',
        'cancelFailed': 'Cancel Failed',
        'updateFailed': 'Update Failed',
        'addFailed': 'Add Failed',
        'loadFailed': 'Load Failed',
        'saveSuccess': 'Successfully saved!',
        'saveFailed': 'Save failed!',
        'deleteSuccess': 'Successfully deleted!',
        'deleteFaild': 'Failed to delete!',
        'confirmDeletion': 'Confirm deletion?',
        'submitSuccess': 'Submit successfully!',
        'submitFaild': 'Submit failed!',
        'notifyTitle': 'System prompt',
        'httpError': 'HTTP request error! Please check the server error!'
    }
};

console.log(messages[language]['deleteFailed'])



class CardRepositoryService {}
//  update 方法   
 

CardRepositoryService.prototype.update = function (id) {
    var _this = this;
    this.loadingService.show();
    var update$ = this.repository.updateById(id);
    return update$.pipe(tap$1(function () {
        _this.loadingService.hide();
    }));
};

CardRepositoryService.prototype.save = function () {
    var _this = this;
    // 获取当前行
    var id = this.bindingData.list.currentId;
    if (!id) {
        return of(false);
    }
    this.loadingService.show();
    var update$ = this.repository.updateChangesById(id);
    var save$ = this.repository.applyChangesById(id);
    var result$ = update$.pipe(
    // update$ => save$
    switchMap(function (updateResult) {
        if (updateResult === false) {
            return of(false);
        }
        else {
            return save$;
        }
    }), 
    // 隐藏loading
    tap$1(function () {
        _this.loadingService.hide();
    }));
    return result$;
};

 /**
     * 取消
     */
    CardRepositoryService.prototype.cancel = function () {
        var _this = this;
        this.loadingService.show();
        var cancel$ = this.repository.cancelChanges();
        return cancel$.pipe(tap$1(function () {
            _this.loadingService.hide();
        }));
    };