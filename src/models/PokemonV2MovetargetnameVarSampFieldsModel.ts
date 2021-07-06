import { Instance } from "mobx-state-tree"
import { PokemonV2MovetargetnameVarSampFieldsModelBase } from "./PokemonV2MovetargetnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovetargetnameVarSampFieldsModel */
export interface PokemonV2MovetargetnameVarSampFieldsModelType extends Instance<typeof PokemonV2MovetargetnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovetargetnameVarSampFieldsModel */
export { selectFromPokemonV2MovetargetnameVarSampFields, pokemonV2MovetargetnameVarSampFieldsModelPrimitives, PokemonV2MovetargetnameVarSampFieldsModelSelector } from "./PokemonV2MovetargetnameVarSampFieldsModel.base"

/**
 * PokemonV2MovetargetnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovetargetnameVarSampFieldsModel = PokemonV2MovetargetnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
