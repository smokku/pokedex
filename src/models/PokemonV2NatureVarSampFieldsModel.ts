import { Instance } from "mobx-state-tree"
import { PokemonV2NatureVarSampFieldsModelBase } from "./PokemonV2NatureVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureVarSampFieldsModel */
export interface PokemonV2NatureVarSampFieldsModelType extends Instance<typeof PokemonV2NatureVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureVarSampFieldsModel */
export { selectFromPokemonV2NatureVarSampFields, pokemonV2NatureVarSampFieldsModelPrimitives, PokemonV2NatureVarSampFieldsModelSelector } from "./PokemonV2NatureVarSampFieldsModel.base"

/**
 * PokemonV2NatureVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2NatureVarSampFieldsModel = PokemonV2NatureVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
