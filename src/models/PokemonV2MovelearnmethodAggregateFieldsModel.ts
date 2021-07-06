import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodAggregateFieldsModelBase } from "./PokemonV2MovelearnmethodAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodAggregateFieldsModel */
export interface PokemonV2MovelearnmethodAggregateFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodAggregateFieldsModel */
export { selectFromPokemonV2MovelearnmethodAggregateFields, pokemonV2MovelearnmethodAggregateFieldsModelPrimitives, PokemonV2MovelearnmethodAggregateFieldsModelSelector } from "./PokemonV2MovelearnmethodAggregateFieldsModel.base"

/**
 * PokemonV2MovelearnmethodAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movelearnmethod"
 */
export const PokemonV2MovelearnmethodAggregateFieldsModel = PokemonV2MovelearnmethodAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
