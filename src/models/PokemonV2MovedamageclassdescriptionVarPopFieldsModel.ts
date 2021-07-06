import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionVarPopFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionVarPopFieldsModel */
export interface PokemonV2MovedamageclassdescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionVarPopFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionVarPopFields, pokemonV2MovedamageclassdescriptionVarPopFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionVarPopFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionVarPopFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MovedamageclassdescriptionVarPopFieldsModel = PokemonV2MovedamageclassdescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
