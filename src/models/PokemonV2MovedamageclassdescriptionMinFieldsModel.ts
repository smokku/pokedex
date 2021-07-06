import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionMinFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionMinFieldsModel */
export interface PokemonV2MovedamageclassdescriptionMinFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionMinFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionMinFields, pokemonV2MovedamageclassdescriptionMinFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionMinFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionMinFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovedamageclassdescriptionMinFieldsModel = PokemonV2MovedamageclassdescriptionMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
