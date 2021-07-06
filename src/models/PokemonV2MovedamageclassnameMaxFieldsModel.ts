import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameMaxFieldsModelBase } from "./PokemonV2MovedamageclassnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameMaxFieldsModel */
export interface PokemonV2MovedamageclassnameMaxFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameMaxFieldsModel */
export { selectFromPokemonV2MovedamageclassnameMaxFields, pokemonV2MovedamageclassnameMaxFieldsModelPrimitives, PokemonV2MovedamageclassnameMaxFieldsModelSelector } from "./PokemonV2MovedamageclassnameMaxFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovedamageclassnameMaxFieldsModel = PokemonV2MovedamageclassnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
