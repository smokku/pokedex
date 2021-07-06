import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameAggregateFieldsModelBase } from "./PokemonV2ItemcategorynameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameAggregateFieldsModel */
export interface PokemonV2ItemcategorynameAggregateFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameAggregateFieldsModel */
export { selectFromPokemonV2ItemcategorynameAggregateFields, pokemonV2ItemcategorynameAggregateFieldsModelPrimitives, PokemonV2ItemcategorynameAggregateFieldsModelSelector } from "./PokemonV2ItemcategorynameAggregateFieldsModel.base"

/**
 * PokemonV2ItemcategorynameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemcategoryname"
 */
export const PokemonV2ItemcategorynameAggregateFieldsModel = PokemonV2ItemcategorynameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
