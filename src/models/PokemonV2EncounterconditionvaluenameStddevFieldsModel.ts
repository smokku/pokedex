import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameStddevFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameStddevFieldsModel */
export interface PokemonV2EncounterconditionvaluenameStddevFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameStddevFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameStddevFields, pokemonV2EncounterconditionvaluenameStddevFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameStddevFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameStddevFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionvaluenameStddevFieldsModel = PokemonV2EncounterconditionvaluenameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
