import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextAggregateFieldsModelBase } from "./PokemonV2ItemeffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextAggregateFieldsModel */
export interface PokemonV2ItemeffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextAggregateFieldsModel */
export { selectFromPokemonV2ItemeffecttextAggregateFields, pokemonV2ItemeffecttextAggregateFieldsModelPrimitives, PokemonV2ItemeffecttextAggregateFieldsModelSelector } from "./PokemonV2ItemeffecttextAggregateFieldsModel.base"

/**
 * PokemonV2ItemeffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemeffecttext"
 */
export const PokemonV2ItemeffecttextAggregateFieldsModel = PokemonV2ItemeffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
