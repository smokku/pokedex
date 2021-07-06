import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectAggregateFieldsModelBase } from "./PokemonV2ItemflingeffectAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectAggregateFieldsModel */
export interface PokemonV2ItemflingeffectAggregateFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectAggregateFieldsModel */
export { selectFromPokemonV2ItemflingeffectAggregateFields, pokemonV2ItemflingeffectAggregateFieldsModelPrimitives, PokemonV2ItemflingeffectAggregateFieldsModelSelector } from "./PokemonV2ItemflingeffectAggregateFieldsModel.base"

/**
 * PokemonV2ItemflingeffectAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemflingeffect"
 */
export const PokemonV2ItemflingeffectAggregateFieldsModel = PokemonV2ItemflingeffectAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
