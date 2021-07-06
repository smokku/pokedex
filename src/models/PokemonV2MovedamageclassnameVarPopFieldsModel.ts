import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameVarPopFieldsModelBase } from "./PokemonV2MovedamageclassnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameVarPopFieldsModel */
export interface PokemonV2MovedamageclassnameVarPopFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameVarPopFieldsModel */
export { selectFromPokemonV2MovedamageclassnameVarPopFields, pokemonV2MovedamageclassnameVarPopFieldsModelPrimitives, PokemonV2MovedamageclassnameVarPopFieldsModelSelector } from "./PokemonV2MovedamageclassnameVarPopFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovedamageclassnameVarPopFieldsModel = PokemonV2MovedamageclassnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
