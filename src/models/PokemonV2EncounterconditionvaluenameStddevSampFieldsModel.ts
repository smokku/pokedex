import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameStddevSampFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameStddevSampFieldsModel */
export interface PokemonV2EncounterconditionvaluenameStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameStddevSampFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameStddevSampFields, pokemonV2EncounterconditionvaluenameStddevSampFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionvaluenameStddevSampFieldsModel = PokemonV2EncounterconditionvaluenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
