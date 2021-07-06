import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassMaxFieldsModelBase } from "./PokemonV2MovedamageclassMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassMaxFieldsModel */
export interface PokemonV2MovedamageclassMaxFieldsModelType extends Instance<typeof PokemonV2MovedamageclassMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassMaxFieldsModel */
export { selectFromPokemonV2MovedamageclassMaxFields, pokemonV2MovedamageclassMaxFieldsModelPrimitives, PokemonV2MovedamageclassMaxFieldsModelSelector } from "./PokemonV2MovedamageclassMaxFieldsModel.base"

/**
 * PokemonV2MovedamageclassMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovedamageclassMaxFieldsModel = PokemonV2MovedamageclassMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
