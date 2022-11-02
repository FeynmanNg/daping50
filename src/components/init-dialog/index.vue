<template>
  <el-dialog
    title="初始化信息"
    :visible.sync="dialogVisible"
    width="70%"
    :before-close="onClose"
    modal-append-to-body
    append-to-body>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="大屏标题">
        <el-input v-model="form.title" name="title" label="大屏标题"></el-input>
      </el-form-item>
      <el-form-item label="考试时间">
        <el-time-picker
          is-range
          arrow-control
          v-model="form.timeRange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-form-item>
      <el-form-item label="比赛A">
        <el-input v-model="form.subject1" name="subject1" label="比赛A">
          <template slot="append">
            <el-input v-model="form.subject1ids" placeholder="比赛A IDs（以英文逗号分割，如 1001,1002）" style="width: 40vw;"></el-input>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="比赛B">
        <el-input v-model="form.subject2" name="subject2" label="比赛B">
          <template slot="append">
            <el-input v-model="form.subject2ids" placeholder="比赛B IDs（以英文逗号分割，如 1001,1002）" style="width: 40vw;"></el-input>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="阶段" v-for="(item, i) in form.arrSub" :key="i + 'arrSub'">
        <el-input v-model="item.name" label="阶段">
          <template slot="prepend">
            <el-select name="select" v-model="item.subject" style="min-width: 250px;">
              <el-option v-for="(o, i) in options" :key="i + o.label" :label="o.label" :value="o.value"></el-option>
            </el-select>
            <!-- <el-input v-model="item.id" placeholder="阶段id" style="width: 150px;"></el-input> -->
          </template>
          <template slot="append">
            <div style="min-width: 50px;">
              <el-button-group>
                <el-button type="primary" icon="el-icon-plus" circle @click="onAdd"></el-button>
                <el-button type="primary" icon="el-icon-minus" circle @click="onDel(i)"></el-button>
              </el-button-group>
            </div>
          </template>
        </el-input>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onResetTime">重置计时</el-button>
      <el-button :type="pause ? 'warning' : 'primary'" @click="onPause">{{pause ? '开 始' : '暂 停'}}</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import storage from '@/helper/storage';
import { emitStart, emitPause, emitReset } from '@/helper/bus';


export default {
  props: {
    pause: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    options() {
      return [
        {
          label: this.form.subject1,
          value: this.form.subject1
        },
        {
          label: this.form.subject2,
          value: this.form.subject2
        }
      ]
    }
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        title: '', // 标题
        subject1: '', // 左边比赛名，如 窝点勘察
        subject2: '', // 右边比赛名，如 检查鉴定
        arrSub: [{ name: '', subject: '' }], // 比赛的阶段列表
        timeRange: [new Date(), new Date()] // 考试时间-倒计时的计算
      }
    }
  },
  mounted() {
    const form = storage.getForm();
    if (form && JSON.stringify(form) !== '{}') {
      if (Array.isArray(form.subject1ids)) {
        form.subject1ids = form.subject1ids.join(',');
      }
      if (Array.isArray(form.subject2ids)) {
        form.subject2ids = form.subject2ids.join(',');
      }
      this.form = form;
    }
  },
  methods: {
    onResetTime() {
      this.$emit('on-reset-time');
      // this.onBus({ type: 'reset' });
    },
    onPause() {
      this.$emit('on-pause');
      // this.onBus({ type: 'pause', data: !this.pause });
    },
    onClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    onSubmit() {
      console.log(this.form);
      storage.setForm(this.form);
      this.$alert('添加成功', { type: 'success' }).then(_ => {
        this.dialogVisible = false;
        window.location.reload();
      });
    },
    // 添加
    onAdd() {
      this.form.arrSub.push({
        name: '', subject: '' 
      })
    },
    // 删除
    onDel(i) {
      if (this.form.arrSub.length === 1) {
        return;
      }
      this.form.arrSub.splice(i, 1);
    },
    onBus({ type, data }) {
      if (type === 'start') {
        emitStart(data);
      } else if (type === 'pause') {
        emitPause(data);
      } else {
        emitReset(data);
      }
    }
  }
}
</script>