import { Instance } from "mobx-state-tree"
import { PokemonV2ItempocketnameVarSampFieldsModelBase } from "./PokemonV2ItempocketnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItempocketnameVarSampFieldsModel */
export interface PokemonV2ItempocketnameVarSampFieldsModelType extends Instance<typeof PokemonV2ItempocketnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItempocketnameVarSampFieldsModel */
export { selectFromPokemonV2ItempocketnameVarSampFields, pokemonV2ItempocketnameVarSampFieldsModelPrimitives, PokemonV2ItempocketnameVarSampFieldsModelSelector } from "./PokemonV2ItempocketnameVarSampFieldsModel.base"

/**
 * PokemonV2ItempocketnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ItempocketnameVarSampFieldsModel = PokemonV2ItempocketnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
