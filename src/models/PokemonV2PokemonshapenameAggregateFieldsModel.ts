import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapenameAggregateFieldsModelBase } from "./PokemonV2PokemonshapenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapenameAggregateFieldsModel */
export interface PokemonV2PokemonshapenameAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonshapenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapenameAggregateFieldsModel */
export { selectFromPokemonV2PokemonshapenameAggregateFields, pokemonV2PokemonshapenameAggregateFieldsModelPrimitives, PokemonV2PokemonshapenameAggregateFieldsModelSelector } from "./PokemonV2PokemonshapenameAggregateFieldsModel.base"

/**
 * PokemonV2PokemonshapenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonshapename"
 */
export const PokemonV2PokemonshapenameAggregateFieldsModel = PokemonV2PokemonshapenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
