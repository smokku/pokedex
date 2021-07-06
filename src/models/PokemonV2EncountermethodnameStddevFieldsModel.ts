import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodnameStddevFieldsModelBase } from "./PokemonV2EncountermethodnameStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodnameStddevFieldsModel */
export interface PokemonV2EncountermethodnameStddevFieldsModelType extends Instance<typeof PokemonV2EncountermethodnameStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodnameStddevFieldsModel */
export { selectFromPokemonV2EncountermethodnameStddevFields, pokemonV2EncountermethodnameStddevFieldsModelPrimitives, PokemonV2EncountermethodnameStddevFieldsModelSelector } from "./PokemonV2EncountermethodnameStddevFieldsModel.base"

/**
 * PokemonV2EncountermethodnameStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncountermethodnameStddevFieldsModel = PokemonV2EncountermethodnameStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
