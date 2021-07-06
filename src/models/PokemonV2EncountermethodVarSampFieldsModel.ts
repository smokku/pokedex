import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodVarSampFieldsModelBase } from "./PokemonV2EncountermethodVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodVarSampFieldsModel */
export interface PokemonV2EncountermethodVarSampFieldsModelType extends Instance<typeof PokemonV2EncountermethodVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodVarSampFieldsModel */
export { selectFromPokemonV2EncountermethodVarSampFields, pokemonV2EncountermethodVarSampFieldsModelPrimitives, PokemonV2EncountermethodVarSampFieldsModelSelector } from "./PokemonV2EncountermethodVarSampFieldsModel.base"

/**
 * PokemonV2EncountermethodVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2EncountermethodVarSampFieldsModel = PokemonV2EncountermethodVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
