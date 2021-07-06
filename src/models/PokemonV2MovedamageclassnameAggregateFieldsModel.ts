import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameAggregateFieldsModelBase } from "./PokemonV2MovedamageclassnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameAggregateFieldsModel */
export interface PokemonV2MovedamageclassnameAggregateFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameAggregateFieldsModel */
export { selectFromPokemonV2MovedamageclassnameAggregateFields, pokemonV2MovedamageclassnameAggregateFieldsModelPrimitives, PokemonV2MovedamageclassnameAggregateFieldsModelSelector } from "./PokemonV2MovedamageclassnameAggregateFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movedamageclassname"
 */
export const PokemonV2MovedamageclassnameAggregateFieldsModel = PokemonV2MovedamageclassnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
