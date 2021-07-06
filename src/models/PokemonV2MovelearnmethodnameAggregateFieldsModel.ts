import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameAggregateFieldsModelBase } from "./PokemonV2MovelearnmethodnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameAggregateFieldsModel */
export interface PokemonV2MovelearnmethodnameAggregateFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameAggregateFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameAggregateFields, pokemonV2MovelearnmethodnameAggregateFieldsModelPrimitives, PokemonV2MovelearnmethodnameAggregateFieldsModelSelector } from "./PokemonV2MovelearnmethodnameAggregateFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_movelearnmethodname"
 */
export const PokemonV2MovelearnmethodnameAggregateFieldsModel = PokemonV2MovelearnmethodnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
