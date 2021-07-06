import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextAggregateFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextAggregateFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextAggregateFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextAggregateFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextAggregateFields, pokemonV2ItemflingeffecteffecttextAggregateFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextAggregateFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextAggregateFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_itemflingeffecteffecttext"
 */
export const PokemonV2ItemflingeffecteffecttextAggregateFieldsModel = PokemonV2ItemflingeffecteffecttextAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
