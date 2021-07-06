import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypeVarSampFieldsModelBase } from "./PokemonV2ContesttypeVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypeVarSampFieldsModel */
export interface PokemonV2ContesttypeVarSampFieldsModelType extends Instance<typeof PokemonV2ContesttypeVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypeVarSampFieldsModel */
export { selectFromPokemonV2ContesttypeVarSampFields, pokemonV2ContesttypeVarSampFieldsModelPrimitives, PokemonV2ContesttypeVarSampFieldsModelSelector } from "./PokemonV2ContesttypeVarSampFieldsModel.base"

/**
 * PokemonV2ContesttypeVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2ContesttypeVarSampFieldsModel = PokemonV2ContesttypeVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
