import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameSumFieldsModelBase } from "./PokemonV2MovedamageclassnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameSumFieldsModel */
export interface PokemonV2MovedamageclassnameSumFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameSumFieldsModel */
export { selectFromPokemonV2MovedamageclassnameSumFields, pokemonV2MovedamageclassnameSumFieldsModelPrimitives, PokemonV2MovedamageclassnameSumFieldsModelSelector } from "./PokemonV2MovedamageclassnameSumFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovedamageclassnameSumFieldsModel = PokemonV2MovedamageclassnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
