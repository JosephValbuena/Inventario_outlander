package com.outlander.outlander.service;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.outlander.outlander.model.SecuenciaDB;

@Service
public class GenerarSecuenciaService {

    @Autowired
    private MongoOperations mongo;

    public Long getNextSequence(String seqName) {
        SecuenciaDB counter = mongo.findAndModify(query(where("_id").is(seqName)),
                new Update().inc("seq", 1), options().returnNew(true).upsert(true),
                SecuenciaDB.class);
        return !Objects.isNull(counter) ? counter.getSeq() : 1;
    }
}
