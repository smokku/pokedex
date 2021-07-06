import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassVarSampFieldsModelBase } from "./PokemonV2MovedamageclassVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassVarSampFieldsModel */
export interface PokemonV2MovedamageclassVarSampFieldsModelType extends Instance<typeof PokemonV2MovedamageclassVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassVarSampFieldsModel */
export { selectFromPokemonV2MovedamageclassVarSampFields, pokemonV2MovedamageclassVarSampFieldsModelPrimitives, PokemonV2MovedamageclassVarSampFieldsModelSelector } from "./PokemonV2MovedamageclassVarSampFieldsModel.base"

/**
 * PokemonV2MovedamageclassVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovedamageclassVarSampFieldsModel = PokemonV2MovedamageclassVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
