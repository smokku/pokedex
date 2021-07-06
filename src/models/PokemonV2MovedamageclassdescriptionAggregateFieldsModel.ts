import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionAggregateFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionAggregateFieldsModel */
export interface PokemonV2MovedamageclassdescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionAggregateFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionAggregateFields, pokemonV2MovedamageclassdescriptionAggregateFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionAggregateFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionAggregateFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movedamageclassdescription"
 */
export const PokemonV2MovedamageclassdescriptionAggregateFieldsModel = PokemonV2MovedamageclassdescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
