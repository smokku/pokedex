import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameVarSampFieldsModelBase } from "./PokemonV2MovedamageclassnameVarSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameVarSampFieldsModel */
export interface PokemonV2MovedamageclassnameVarSampFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameVarSampFieldsModel */
export { selectFromPokemonV2MovedamageclassnameVarSampFields, pokemonV2MovedamageclassnameVarSampFieldsModelPrimitives, PokemonV2MovedamageclassnameVarSampFieldsModelSelector } from "./PokemonV2MovedamageclassnameVarSampFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const PokemonV2MovedamageclassnameVarSampFieldsModel = PokemonV2MovedamageclassnameVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
