import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameMaxFieldsModelBase } from "./PokemonV2MovelearnmethodnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameMaxFieldsModel */
export interface PokemonV2MovelearnmethodnameMaxFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameMaxFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameMaxFields, pokemonV2MovelearnmethodnameMaxFieldsModelPrimitives, PokemonV2MovelearnmethodnameMaxFieldsModelSelector } from "./PokemonV2MovelearnmethodnameMaxFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovelearnmethodnameMaxFieldsModel = PokemonV2MovelearnmethodnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
