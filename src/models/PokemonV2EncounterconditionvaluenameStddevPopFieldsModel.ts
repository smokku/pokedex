import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameStddevPopFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameStddevPopFieldsModel */
export interface PokemonV2EncounterconditionvaluenameStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameStddevPopFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameStddevPopFields, pokemonV2EncounterconditionvaluenameStddevPopFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionvaluenameStddevPopFieldsModel = PokemonV2EncounterconditionvaluenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
